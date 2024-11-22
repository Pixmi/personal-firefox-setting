// ==UserScript==
// @name        y3939 auto vote and style
// @namespace   https://github.com/Pixmi/
// @version     1.0.0
// @description for y3939.net
// @author      Pixmi
// @license     MIT
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/y3939.user.js
// @icon        http://www.google.com/s2/favicons?domain=https://y3939.net/
// @match       *://*.y3939.net/*
// @grant       GM_addStyle
// @run-at      document-body
// ==/UserScript==

GM_addStyle(`
@midia (max-width: 800px) {
    .topnav,
    .header_box,
    .function_box,
    #btn_newvote,
    .voteposter_photo,
    .photo_time,
    .topbar_name+div {
        display: none !important;
    }
    .msg_name {
        width: 100px !important;
    }
}
`);

(function() {
    'use strict';

    function delay(sec) {
        return new Promise((resolve) => {
            setTimeout(resolve, sec * 1000);
        })
    }

    async function vote() {
        await delay(1)
        .then(() => {
            const voteButton = document.body.querySelector('#btn_vote');
            voteButton.dispatchEvent(new Event('click'), {});
            return delay(1);
        })
        .then(() => {
            const voteDialot = document.body.querySelector('#jBox8 #vote_dialog');
            voteDialot.querySelector('.vote_selection:first-child').classList.add('alert-success');
            voteDialot.querySelector('.btn_votepoll').dispatchEvent(new Event('click'), {});
        })
    }

    const observeConfig = {
        childList: true,
        attributes: false,
        characterData: false,
    };

    const ChatObserver = new MutationObserver(function (mutations) {
        mutations.forEach((record) => {
            if (record.addedNodes.length) {
                record.addedNodes.forEach((item) => {
                    let message = item.querySelector(".msg_text");
                    message.querySelector("span.time").remove();
                    if (/^#vote/.test(message.textContent)) vote();
                });
            }
        });
    });

    let bot = setInterval(() => {
        let ChatList = document.body.querySelector("#msg_table > tbody");
        if (ChatList) {
            ChatObserver.observe(ChatList, observeConfig);
            console.log('auto vote start.')
            clearInterval(bot);
        }
    }, 2000);
})();