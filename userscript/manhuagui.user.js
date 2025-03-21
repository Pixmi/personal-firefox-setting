// ==UserScript==
// @name        [UserStyle] manhuagui
// @namespace   https://github.com/Pixmi/
// @version     1.0.1
// @description for manhuagui.com
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/manhuagui.user.js
// @match       *://*.manhuagui.com/*
// @resource    UserStyle https://github.com/Pixmi/personal-firefox-setting/raw/main/userstyle/manhuagui.user.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('UserStyle'));