---
title: The metaobject protocol
---

{% include menu.html %}

Every class, role, and type in Raku is itself described by another object — its _metaobject_ — which knows the type’s name, its attributes, its methods, and its place in the inheritance tree. The interface to these metaobjects is the _metaobject protocol_, or MOP.

You have already used a corner of it: `.^name` is a MOP call. This section shows the `.^` syntax properly, the most useful meta-methods for inspecting a type, and how the MOP even lets you add methods to a class while the program runs.

{% include nav.html %}
