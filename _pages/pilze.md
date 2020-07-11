---
navi: /pilze
title: Pilzporträts
permalink: pilze
---

{% assign lastletter = "" %}

{% for pilz in site.pilze %}
  {% assign tmpletter = pilz.wissenschaftlich | slice: 0 | upcase %}
  {% if tmpletter != lastletter %}
  <div class="text-center mt-3">— {{ tmpletter }} —</div>
  {% endif %}
  <a href="{{pilz.url | relative_url}}">{{ pilz.wissenschaftlich }} ({{ pilz.landlaeufig }})</a>
  {% assign lastletter = tmpletter %}
{% endfor %}
