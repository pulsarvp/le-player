/**
 * @file browser.js
 */


const USER_AGENT = window.navigator && window.navigator.userAgent || '';

export const IS_CHROME = USER_AGENT.indexOf('Chrome') > -1;

export const IS_SAFARI = USER_AGENT.indexOf('Safari') > -1 && !IS_CHROME;

