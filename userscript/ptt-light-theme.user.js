// ==UserScript==
// @name        [UserStyle] PTT light theme
// @namespace   https://github.com/Pixmi/
// @version     1.0.0
// @description for ptt.cc
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/ptt-light-theme.user.js
// @match       *://*.ptt.cc/*
// @resource    UserStyle https://github.com/Pixmi/personal-firefox-setting/raw/main/userstyle/ptt-light-theme.user.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('UserStyle'));