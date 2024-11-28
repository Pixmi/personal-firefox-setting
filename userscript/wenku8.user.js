// ==UserScript==
// @name        [UserStyle] Wenku8
// @namespace   https://github.com/Pixmi/
// @version     1.0.0
// @description for wenku8.net
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/wenku8.user.js
// @match       *://*.wenku8.net/*
// @resource    UserStyle https://github.com/Pixmi/personal-firefox-setting/raw/main/userstyle/wenku8.user.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

GM_addStyle(GM_getResourceText('UserStyle'));