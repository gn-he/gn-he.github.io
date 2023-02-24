"use strict";
$(function () {
  let language = document.body.getAttribute("lang");
  let search = instantsearch({
    indexName: "site",
    // Replace them with "Application ID" and "Search-Only API Key", from "Settings" -> "API Keys".
    searchClient: algoliasearch("NO3SXSOXCK", "7b65cd5c871359f47c745009bbe8f5ce"),
  });

  let hitTemplate = function (hit) {
    let url = hit.external_url || hit.url,
      title = hit._highlightResult.title.value,
      content = (hit._highlightResult.content || []).value;

    let defineList = $("<dl/>").addClass("site-search-list-item"),
      defineTitle = $("<dt/>")
        .addClass("site-search-list-title")
        .append(
          $("<a/>")
            .attr({
              "href": location.href.match(/^.+(?=\/search\/)/)[0] + url,
              "target": hit.external_url ? "_blank" : null,
            })
            .html(title)
        )
        .appendTo(defineList),
      defineContent = $("<dd/>").addClass("site-search-list-content").html(content).appendTo(defineList);

    return defineList[0].outerHTML;
  };

  search.addWidget(
    instantsearch.widgets.configure({
      "filters": `language:"${language}"`,
    })
  );

  let timerId = 0;
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: ".site-search-searchbar",
      placeholder: language == "en" ? "" : "请输入关键词",
      cssClasses: {
        "input": "form-control",
        "submit": "btn btn-primary",
      },
      showLoadingIndicator: true,
      queryHook(query, refine) {
        clearTimeout(timerId);
        timerId = setTimeout(() => refine(query), 500);
      },
    })
  );
  search.addWidget(
    instantsearch.widgets.hits({
      container: ".site-search-hits",
      templates: {
        item: hitTemplate,
      },
    })
  );
  search.addWidget(
    instantsearch.widgets.poweredBy({
      container: ".site-search-poweredby",
    })
  );

  search.start();
});
