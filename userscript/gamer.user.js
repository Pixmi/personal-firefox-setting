// ==UserScript==
// @name        [UserStyle] Gamer.com.tw
// @namespace   https://github.com/Pixmi/
// @version     1.0.3
// @description for gamer.com.tw
// @author      Pixmi
// @license     GPL-3.0
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/gamer.user.js
// @match       *://*.gamer.com.tw/*
// @grant       GM_addStyle
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// ==/UserScript==

const UserStyle = `
@media screen and (max-width: 760px) {
    .c-section {
        max-width: 100vw;
        text-align: left;
        margin-bottom: 0;
    }
    
    .c-post__body img,
    .c-post__body iframe {
        max-width: 100%;
    }

    .c-section__side {
        background-color: rgba(255, 255, 255, .8);
        border-radius: 0 5px 5px 0;
        backdrop-filter: blur(2px);
        float: unset;
        transform: translateX(-100%);
        margin-bottom: -100%;
        padding: 10px;
        margin-top: 10px;
        z-index: 100;
    }
    
    .c-section__side:hover {
        border-width: 1px 1px 1px 0;
        border-color: #e5e5e5;
        border-style: solid;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
        transform: translateX(0);
        top: 50px;
    }
    
    .c-section__side::after {
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: right;
        border: 1px solid #e5e5e5;
        border-radius: 0 5px 5px 0;
        color: #ddd;
        content: ">";
        cursor: pointer;
        display: inline-block;
        text-align: right;
        width: 100%;
        position: absolute;
        top: 0;
        padding: 5px;
    }
    
    .c-section__side:hover::after {
        background-color: transparent;
        border-color: transparent;
        content: " ";
    }
    
    .c-section__main {
        max-width: 100%;
    }
    
    .bh-banner {
        margin-top: 84px;
    }
    
    #BH-slave {
        min-height: unset !important;
    }
    
    #BH-slave > .BH-rbox,
    #BH-slave > .baha_quicktool {
        display: none !important;
    }
    
    #BH-wrapper {
        width: 100%;
    }
    
    #BH-menu-path {
        border-bottom: 1px solid #e5e5e5;
        box-shadow: none;
    }
    ul.BH-menuE {
        max-width: 100%;
        min-width: 100%;
    }

    ul.BH-menuE > li:nth-child(1),
    ul.BH-menuE > li:nth-child(4),
    ul.BH-menuE > li:nth-child(5),
    ul.BH-menuE > ul {
        display: none !important;
    }
    
    #BH-footer {
        display: none !important;
    }

    #BH-master {
        max-width: 100%;
        float: unset;
    }
    
    a[name="quickPostAnchor"] + .c-section + .c-section {
        display: none !important;
    }
}`;

GM_addStyle(UserStyle);