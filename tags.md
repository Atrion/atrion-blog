---
layout: page
title: "Tags"
permalink: /tags/
---

{% assign tags_list = site.tags %}
{% if tags_list %}
<ul>
{% for tag in tags_list %}
  <li><a href="#{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>

{% for tag in tags_list %}
<h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
<ul>
  {% for post in tag[1] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
{% endif %}
