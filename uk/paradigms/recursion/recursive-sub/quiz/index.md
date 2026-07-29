---
title: 'Тест — Рекурсія'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

`sum(4)` — це `4 + sum(3)`, що розкручується в `4 + 3 + 2 + 1`, тобто `10`. Рекурсія зупиняється на базовому випадку, коли `$n` досягає `0`.

</div>

{% include nav.html %}
