---
title: Quiz — Autothreading
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Moltiplicare una junction fa autothreading: `* 2` viene applicato a ciascun valore dietro la junction, producendo una nuova junction `any` `any(2, 4, 6)`.

</div>

{% include nav.html %}
