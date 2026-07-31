---
title: Viktorīna — Rekursija
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`sum(4)` ir `4 + sum(3)`, kas attinas par `4 + 3 + 2 + 1`, tas ir, `10`. Rekursija apstājas pie bāzes gadījuma, kad `$n` sasniedz `0`.

</div>

{% include nav.html %}
