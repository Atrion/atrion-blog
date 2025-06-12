---
layout: page
title: "Projects"
permalink: /projects/
---

<div class="projects-container">
  {% assign sorted_projects = site.projects | sort: "updated" | reverse %}
  {% for project in sorted_projects %}
    <div class="project-card">
      <a href="{{ project.url | relative_url }}">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        {% endif %}
        <h3>{{ project.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>
