/* global $ */
$(function () {
  "use strict";
  let search_links = $(".site-navbar-item-search > a > .site-navbar-text > span").toArray();
  search_links.forEach(function (tag) {
    $(tag).wrap($("<a/>").attr("href", $(tag).data("href")));
  });
  $(".site-navbar-item-search > a").attr("href", "javascript:void(0);").removeAttr("href");
});

$(function () {
  let biaodian_pattern = /[“”‘’]/g; // Chinese punctuation

  /**
   * @param {Element} node - HTML Element for replace
   */
  function replace_biaodian(node) {
    if (node.nodeType == 3) {
      let biaodian = node.textContent.match(biaodian_pattern);
      if (!biaodian) {
        return;
      }
      let parts = node.textContent.split(biaodian_pattern);
      /**
       * @type {[Element]}
       */
      let replace_with = [];
      for (let i = 0; i < parts.length; i++) {
        replace_with.push(document.createTextNode(parts[i]));
        if (i < biaodian.length) {
          let span = document.createElement("span");
          span.className = "biaodian";
          span.appendChild(document.createTextNode(biaodian[i]));
          replace_with.push(span);
        }
      }
      node.replaceWith(...replace_with);
    } else if (node.nodeType == 1) {
      if (
        node.getAttribute("lang") == "en" ||
        node.nodeName.toLowerCase().match(/textarea|pre/) ||
        node.classList.contains("biaodian")
      ) {
        return;
      }
      node.childNodes.forEach(replace_biaodian);
    }
  }
  replace_biaodian(document.body);
});
