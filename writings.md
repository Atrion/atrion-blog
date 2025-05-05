---
layout: page
title: "Writings"
permalink: /writings/
---

<ul>
  {% assign sorted_writings = site.writings | sort: "date" | reverse %}
  {% for writing in sorted_writings %}
    <li>
      {% if writing.type %}
        <strong>{{ writing.type }} – </strong>
      {% endif %}
      <a href="{{ writing.url | relative_url }}">{{ writing.title }}</a>
      – {{ writing.date | date: "%B %d, %Y at %I:%M %p" }}
    </li>
  {% endfor %}
</ul>