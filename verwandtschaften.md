---
layout: base
---

# Verwandtschaften

<ul>
{% for v in site.verwandtschaften %}
<li><a href="{{ v.url | link }}">{{v.title}}</a><pre>[{{ v.titel }}]({{ v.url | absolute_link }})</pre></li>
{% endfor %}
</ul>
