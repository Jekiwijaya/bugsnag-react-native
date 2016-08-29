#import <Bugsnag/Bugsnag.h>

#import "BugsnagReactNative.h"
#import "RCTConvert.h"

BSGBreadcrumbType BreadcrumbTypeFromString(NSString *type) {
    if ([type isEqualToString:@"log"])
        return BSGBreadcrumbTypeLog;
    else if ([type isEqualToString:@"user"])
        return BSGBreadcrumbTypeUser;
    else if ([type isEqualToString:@"error"])
        return BSGBreadcrumbTypeError;
    else if ([type isEqualToString:@"state"])
        return BSGBreadcrumbTypeState;
    else if ([type isEqualToString:@"process"])
        return BSGBreadcrumbTypeProcess;
    else if ([type isEqualToString:@"request"])
        return BSGBreadcrumbTypeRequest;
    else if ([type isEqualToString:@"navigation"])
        return BSGBreadcrumbTypeNavigation;
    else
        return BSGBreadcrumbTypeManual;
}

NSDictionary *BSGConvertTypedNSDictionary(id rawData) {
    NSDictionary *data = [RCTConvert NSDictionary:rawData];
    NSMutableDictionary *converted = [NSMutableDictionary new];
    NSArray *keys = [data allKeys];
    for (int i = 0; i < data.count; i++) {
        NSString *key = [RCTConvert NSString:keys[i]];
        NSDictionary *pair = [RCTConvert NSDictionary:data[key]];
        NSString *type = [RCTConvert NSString:pair[@"type"]];
        id value = pair[@"value"];
        if ([@"boolean" isEqualToString:type]) {
            converted[key] = @([RCTConvert BOOL:value]);
        } else if ([@"number" isEqualToString:type]) {
            converted[key] = [RCTConvert NSNumber:value];
        } else if ([@"string" isEqualToString:type]) {
            converted[key] = [RCTConvert NSString:value];
        } else if ([@"map" isEqualToString:type]) {
            converted[key] = BSGConvertTypedNSDictionary(value);
        }
    }
    return converted;
}

@interface Bugsnag ()
+ (id)notifier;
+ (BOOL)bugsnagStarted;
@end

@implementation BugsnagReactNative

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(notify:(NSDictionary *)options) {
    NSException *exception = [NSException
                              exceptionWithName:[RCTConvert NSString:options[@"errorClass"]]
                              reason:[RCTConvert NSString:options[@"errorMessage"]]
                              userInfo:nil];
    [Bugsnag notify:exception block:^(BugsnagCrashReport *report) {
        if (options[@"context"])
            report.context = [RCTConvert NSString:options[@"context"]];
        if (options[@"groupingHash"])
            report.groupingHash = [RCTConvert NSString:options[@"groupingHash"]];
        if (options[@"severity"])
            report.severity = BSGParseSeverity([RCTConvert NSString:options[@"severity"]]);
        if (options[@"metadata"])
            report.metaData = BSGConvertTypedNSDictionary(options[@"metadata"]);
    }];
}

RCT_EXPORT_METHOD(setUser:(NSDictionary *)userInfo) {
    NSString *identifier = userInfo[@"id"] ? [RCTConvert NSString:userInfo[@"id"]] : nil;
    NSString *name = userInfo[@"name"] ? [RCTConvert NSString:userInfo[@"name"]] : nil;
    NSString *email = userInfo[@"email"] ? [RCTConvert NSString:userInfo[@"email"]] : nil;
    [[Bugsnag configuration] setUser:identifier withName:name andEmail:email];
}

RCT_EXPORT_METHOD(leaveBreadcrumb:(NSDictionary *)options) {
    [Bugsnag leaveBreadcrumbWithBlock:^(BugsnagBreadcrumb *crumb) {
        crumb.name = [RCTConvert NSString:options[@"name"]];
        crumb.type = BreadcrumbTypeFromString([RCTConvert NSString:options[@"type"]]);
        crumb.metadata = BSGConvertTypedNSDictionary(options[@"metadata"]);
    }];
}

RCT_EXPORT_METHOD(startWithOptions:(NSDictionary *)options) {
    NSString *apiKey = [RCTConvert NSString:options[@"apiKey"]];
    NSString *releaseStage = [self  parseReleaseStage:[RCTConvert NSString:options[@"releaseStage"]]];
    NSArray *notifyReleaseStages = [RCTConvert NSStringArray:options[@"notifyReleaseStages"]];
    NSString *notifyURLPath = [RCTConvert NSString:options[@"endpoint"]];
    BugsnagConfiguration* config = [Bugsnag bugsnagStarted] ? [Bugsnag configuration] : [BugsnagConfiguration new];
    config.apiKey = apiKey;
    config.releaseStage = releaseStage;
    config.notifyReleaseStages = notifyReleaseStages;
    if (notifyURLPath.length > 0) {
        NSURL *notifyURL = [NSURL URLWithString:notifyURLPath];
        if (notifyURL)
            config.notifyURL = notifyURL;
    }
    if (![Bugsnag bugsnagStarted]) {
        [Bugsnag startBugsnagWithConfiguration:config];
    }
    [self setNotifierDetails:[RCTConvert NSString:options[@"version"]]];
}

RCT_EXPORT_METHOD(causeNativeCrash) {
    @throw [NSException exceptionWithName:@"Sadness"
                                   reason:@"There weren't enough Stranger things episodes 0___0"
                                 userInfo:nil];
}

- (void)setNotifierDetails:(NSString *)packageVersion {
    id notifier = [Bugsnag notifier];
    NSDictionary *details = [notifier valueForKey:@"details"];
    NSString *version = [NSString stringWithFormat:@"%@ (Cocoa %@)", packageVersion, details[@"version"]];
    NSDictionary *newDetails = @{
        @"version": version,
        @"name": @"Bugsnag for React Native",
        @"url": @"https://github.com/bugsnag/bugsnag-react-native"
    };
    [notifier setValue:newDetails forKey:@"details"];
}

- (NSString *)parseReleaseStage:(NSString *)releaseStage {
    if (releaseStage.length > 0)
        return releaseStage;

#ifdef DEBUG
    return @"development";
#endif
    BOOL isRunningTestFlightBeta = [[[[NSBundle mainBundle] appStoreReceiptURL] lastPathComponent] isEqualToString:@"sandboxReceipt"];
    if (isRunningTestFlightBeta) {
        return @"testflight";
    } else {
        return @"production";
    }
}

@end