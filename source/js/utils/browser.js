/**
 * @file browser.js
 */


const USER_AGENT = window.navigator && window.navigator.userAgent || '';

export const IS_MOBILE = (/Mobile/i).test(USER_AGENT);

export const IS_CHROME = USER_AGENT.indexOf('Chrome') > -1;

export const IS_ANDROID = (/Android/i).test(USER_AGENT);

export const IS_ANDROID_PHONE = IS_ANDROID && IS_MOBILE;

export const IS_IPAD = (/iPad/i).test(USER_AGENT);
// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
export const IS_IPHONE = (/iPhone/i).test(USER_AGENT) && !IS_IPAD;
export const IS_IPOD = (/iPod/i).test(USER_AGENT);
export const IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

export const IS_SAFARI = USER_AGENT.indexOf('Safari') > -1 && !IS_CHROME;

export const IS_TOUCH = () => 'ontouchstart' in window || navigator.maxTouchPoints;