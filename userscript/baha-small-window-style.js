// ==UserScript==
// @name        BAHA small window style
// @namespace   https://github.com/Pixmi/
// @version     1.0.1
// @description for PC side by small window
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/baha-small-window-style.js
// @icon        https://www.google.com/s2/favicons?sz=64&domain=gamer.com.tw
// @match       *://*.gamer.com.tw/*
// @resource    CustomCss https://raw.githubusercontent.com/Pixmi/personal-firefox-setting/refs/heads/main/userstyle/baha-small-window-style.css?v=20241122
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('CustomCss'));