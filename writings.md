---
layout: page
title: "Writings"
permalink: /writings/
---

This is where I'll collect my poems, essays, stories, and random bits of writing.

## Latest Writings

<ul>
  {% assign sorted_writings = site.writings | sort: "title" %}
  {% for writing in sorted_writings %}
    <li><a href="{{ writing.url | relative_url }}">{{ writing.title }}</a> - {{ writing.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>

<!-- 
{% assign writings_posts = site.tags.writings %}
{% if writings_posts %}
<ul>
  {% for post in writings_posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%B %d, %Y" }})</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No writings yet, check back soon.</p>
{% endif %}
-->

