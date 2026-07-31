---
title: Viktorīna — gist un Str
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` atgriež vienkāršu virknes formu, kur elementi ir vienkārši savienoti ar atstarpēm bez iekavām: `1 2 3`. Forma ar iekavām `[1 2 3]` ir tā, ko radītu `.gist` (un tātad `say @a`).

</div>

{% include nav.html %}
