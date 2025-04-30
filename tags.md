---
layout: page
title: "Tags"
permalink: /tags/
---

<h1>Browse by Tag</h1>

{% assign sorted_tags = site.tags | sort %}
{% if sorted_tags %}
<ul>
  {% for tag in sorted_tags %}
    <li><a href="#{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
  {% endfor %}
</ul>

{% for tag in sorted_tags %}
  <h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

{% else %}
<p>No tags found.</p>
{% endif %}
