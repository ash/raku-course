---
title: Quiz — Verschachtelte Arrays
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems;
```

{:.quiz}
0 | 5
1 | 2
0 | 3
0 | 0

{% include quiz.html %}

{% include nav.html %}
