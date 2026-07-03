---
title: Native types
---

{% include menu.html %}

The types you have used so far — `Int`, `Num`, `Str` — are full Raku objects: flexible, introspectable, and arbitrarily large. Raku also offers a parallel family of _native_ types that map directly onto the machine’s own representation: `int`, `num`, `str`, and a set of sized integers.

Native types are written in lower case. They trade flexibility for speed and a fixed size, and they behave a little differently from their boxed counterparts. This section shows what they are and how their fixed size leads to overflow.

{% include nav.html %}
