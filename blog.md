---
layout: page
title: "Blog Posts Archive"
permalink: /blog/
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year %}
<h2>{{ year_group.name }}</h2>

{% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
{% for month_group in posts_by_month %}
<h3>{{ month_group.name }}</h3>
<ul>
  {% for post in month_group.items %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a> -
    {{ post.date | date: "%B %d, %Y at %I:%M %p" }}
  </li>
  {% endfor %}
</ul>
{% endfor %}
{% endfor %}