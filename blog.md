---
layout: page
title: "Blog Posts Archive"
permalink: /blog/
---

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y at %I:%M %p" }}</li>
  {% endfor %}
</ul>