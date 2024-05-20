---
title: Ordered containers in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

In Raku, there are different types of ordered containers. They are containers that keep multiple elements (of course, they can also keep one or even zero elements in the special cases) and keep the order of the elements. The built-in ordered containers are lists, arrays, and sequences.

The `@` sigil suggests that the variable contains a list or a conceptually similar object. If a variable has `@` as its sigil, it supports subscripting, so the elements can be accessed using their index in the ordered storage.

Note that in Raku, you can use a variable with the `$` sigil to host, for example, a list. Examine the below topics to understand how to use different kinds of ordered containers.

{% include nav.html %}
