---
layout: page
title: "Writings"
permalink: /writings/
---

{% assign types = site.writings | map: "type" | uniq | sort %}

{% for type in types %}
  {% assign writings_by_type = site.writings | where: "type", type | sort: "date" | reverse %}
  {% if writings_by_type.size > 0 %}
  <h2>{{ type }}s</h2>
  <ul>
    {% for writing in writings_by_type %}
      <li>
        <a href="{{ writing.url | relative_url }}">{{ writing.title }}</a>
        – {{ writing.date | date: "%B %d, %Y at %I:%M %p" }}
      </li>
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
