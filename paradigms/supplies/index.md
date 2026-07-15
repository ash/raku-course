---
title: Supplies
---

{% include menu.html %}

This subpart is about _reactive_ programming: writing code that responds to a stream of values as they arrive, rather than asking for them one by one. The central type is the _supply_.

A supply is a source of values over time — think of it as a stream you can subscribe to. You attach a piece of code to a supply, and that code runs once for **each** value the supply produces. This “values push to you” style is the opposite of pulling values out of a list, and it is exactly what you want for events, messages, and live data.

{% include nav.html %}
