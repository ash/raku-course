---
title: Captures
---

{% include menu.html %}

Matching tells you _whether_ a pattern is present. A _capture_ goes further: it remembers a particular piece of the match so you can use it afterwards. This is how you pull a year out of a date, a name out of a record, or the parts of any structured string.

Raku has two kinds of captures: _positional_ ones, numbered from zero, and _named_ ones, which you label yourself. Both are reached through the match object.

{% include nav.html %}
