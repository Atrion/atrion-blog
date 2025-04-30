---
layout: page
title: "Writings"
permalink: /writings/
---

This is where I'll collect my poems, essays, stories, and random bits of writing.

## Latest Writings

{% for post in site.posts %}
  {% if post.tags contains "writings" %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endif %}
{% endfor %}


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

