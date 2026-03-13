// ==UserScript==
// @name         LinkCollider Auto-Click
// @namespace    -
// @version      1
// @match        *://lc-s.co/URSti
// @grant        none
// ==/UserScript==
(() => {
  setTimeout(() => {
    const btn = [...document.links].find(l => l.textContent.includes("Click here"));
    if (btn) btn.click();
  }, 2000);
})();
