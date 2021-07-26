---
layout: null
---

var sjs = SimpleJekyllSearch({
  searchInput:          document.getElementById('sucheingabe'),
  resultsContainer:     document.getElementById('suchergebnisse'),
  json:                 '{{ "assets/json/searchIndex.json" | relative_url }}',
  searchResultTemplate: '<a href="{url}"><li><div><span class="wissenschaftlich">{wissenschaftlich}</span> <span class="deutsch">({deutsch})</span></div></li></a>',
  fuzzy:                false,
  noResultsText:        '<li class="p-2 text-muted">Keine Pilze gefunden.<li>'
})
