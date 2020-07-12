---
navi: /pilze
title: Pilzporträts
permalink: pilze
---

{% assign lastletter = "" %}

{% for pilz in site.pilze %}
  {% assign tmpletter = pilz.wissenschaftlich | slice: 0 | upcase %}
  {% if tmpletter != lastletter %}
  <h2 class="mt-5 text-muted">{{ tmpletter }}</h2>
  {% endif %}
  <a href="{{pilz.url | relative_url}}">{{ pilz.wissenschaftlich }} ({{ pilz.landlaeufig }})</a>
  {% assign lastletter = tmpletter %}
{% endfor %}
