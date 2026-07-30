---
title: Quiz — Der Whatever-Stern
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

In einem Index steht das bloße `*` für die Anzahl der Elemente — hier `5`. Also ist `*-2` der Index `3`, und das Element am Index `3` (von null an gezählt) ist `8`.

</div>

{% include nav.html %}
