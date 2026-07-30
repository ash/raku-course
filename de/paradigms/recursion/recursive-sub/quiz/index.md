---
title: 'Quiz — Rekursion'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`sum(4)` ist `4 + sum(3)`, was sich zu `4 + 3 + 2 + 1` abwickelt, also `10`. Die Rekursion hält beim Grundfall an, wenn `$n` `0` erreicht.

</div>

{% include nav.html %}
