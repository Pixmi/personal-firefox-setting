// ==UserScript==
// @name        [UserStyle] BAHA small window
// @namespace   https://github.com/Pixmi/
// @version     1.0.2
// @description for PC side by small window
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/baha-small-window-style.user.js
// @icon        https://github.com/Pixmi/personal-firefox-setting/raw/main/icons/css.svg
// @match       *://*.gamer.com.tw/*
// @resource    UserStyle https://github.com/Pixmi/personal-firefox-setting/raw/main/userstyle/baha-small-window-style.user.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('UserStyle'));