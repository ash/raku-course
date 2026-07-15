---
title: Data feeds
---

{% include menu.html %}

A _feed_ lets you write a chain of list operations in the order they happen, like a pipeline. Instead of nesting `map` inside `grep` inside `sort`, you send data from one stage to the next with the feed operator `==>`.

Feeds read naturally from left to right and make multi-step transformations easy to follow. This section shows the feed operator and how to chain several stages together.

{% include nav.html %}
