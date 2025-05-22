---
layout: page
title: "Latest Blog Posts"
permalink: /
---

{% for post in site.posts limit:5 %}
<div class="post-preview">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-date">{{ post.date | date: "%B %d, %Y at %I:%M %p" }}</p>
  <div class="post-content">
      {{ post.excerpt }}
    </div>
    <p><a href="{{ post.url | relative_url }}">Read more...</a></p>
  </div>
{% endfor %}

<p style="text-align: center;">
  <a href="/blog/blog/" style="text-decoration: none; font-weight: bold;">&lt; View All Posts &gt;</a>
</p>
