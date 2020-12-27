{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

{% assign extended = true %}
{% include toc.html %}
