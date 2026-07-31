---
title: Quiz — Ricorsione
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
sub sum($n) {
    $n <= 0 ?? 0 !! $n + sum($n - 1);
}

say sum(4);
```

{:.quiz}
0 | 4
1 | 10
0 | 24
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

`sum(4)` è `4 + sum(3)`, che si srotola in `4 + 3 + 2 + 1`, cioè `10`. La ricorsione si ferma al caso base, quando `$n` raggiunge `0`.

</div>

{% include nav.html %}
