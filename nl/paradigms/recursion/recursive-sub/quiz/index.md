---
title: 'Quiz — Recursie'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`sum(4)` is `4 + sum(3)`, wat zich afwikkelt tot `4 + 3 + 2 + 1`, dat wil zeggen `10`. De recursie stopt bij het basisgeval, wanneer `$n` `0` bereikt.

</div>

{% include nav.html %}
