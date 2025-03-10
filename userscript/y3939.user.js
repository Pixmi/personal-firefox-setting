// ==UserScript==
// @name        y3939 auto vote and style
// @namespace   https://github.com/Pixmi/
// @version     1.0.2
// @description for y3939.net
// @author      Pixmi
// @license     MIT
// @homepage    https://github.com/Pixmi/personal-firefox-setting
// @downloadURL https://github.com/Pixmi/personal-firefox-setting/raw/main/userscript/y3939.user.js
// @match       *://*.y3939.net/*
// @grant       GM_addStyle
// @run-at      document-body
// ==/UserScript==

GM_addStyle(`
@media only screen and (max-width: 800px) {
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

    const FIXED_TITLE = '鳥巢';
    document.title = FIXED_TITLE;

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

    const chatObserver = new MutationObserver((mutations) => {
        for (const record of mutations) {
            if (!record.addedNodes.length) continue;
            for (const item of record.addedNodes) {
                let message = item.querySelector('.msg_text')?.innerText || false;
                if (!message) continue;
                if (/^#vote/.test(message)) vote();
            }
        }
    });

    const titleObserver = new MutationObserver(() => {
        if (document.title !== FIXED_TITLE) {
            document.title = FIXED_TITLE;
        }
    });

    let bot = setInterval(() => {
        const chatElement = document.body.querySelector('#msg_table > tbody');
        const titleElement = document.querySelector('title');
        if (chatElement && titleElement) {
            chatObserver.observe(chatElement, { childList: true, attributes: false, characterData: false });
            titleObserver.observe(titleElement, { childList: true, subtree: true });
            console.log('auto vote start.')
            clearInterval(bot);
        }
    }, 2000);
})();