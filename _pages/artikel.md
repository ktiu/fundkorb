---
navi: /artikel
title: Artikel
permalink: artikel
---

<section id="artikelliste">

{% for post in site.posts %}
<div class="artikel{% if post.vorschaubild %} row{% endif %}">
  {% if post.vorschaubild %}<div class="vorschaubild col-lg-4">
    <a href="{{ post.url |relative_url}}">
      <img src="{{ post.vorschaubild | prepend: "/bilder/artikel/" | relative_url }}">
    </a>
  </div>
  <div class="col-lg-8 textvorschau">
  {% else %}
  <div class="textvorschau">
  {% endif %}
    <h2><a href="{{ post.url |relative_url}}">{{ post.title }}</a></h2>
    {% if post.author %}<p class="author">von {{post.author}}</p>{% endif %}
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url |relative_url}}">Mehr lesen</a>
  </div>
</div>
{% endfor %}

</section>
