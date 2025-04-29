---
layout: page
title: "Latest Blog Posts"
permalink: /
---

{% for post in site.posts %}
<div class="post-preview">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
  <div class="post-content">
    {{ post.content }}
  </div>
</div>
{% endfor %}
