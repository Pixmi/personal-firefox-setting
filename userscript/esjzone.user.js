// ==UserScript==
// @name        [UserStyle] ESJ Zone
// @namespace   https://github.com/Pixmi/
// @version     1.0.0
// @description for esjzone.cc and esjzone.me
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/esjzone.user.js
// @match       *://*.esjzone.cc/*
// @match       *://*.esjzone.me/*
// @resource    UserStyle https://github.com/Pixmi/personal-firefox-setting/raw/main/userstyle/esjzone.user.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('UserStyle'));