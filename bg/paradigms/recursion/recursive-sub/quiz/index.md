---
title: 'Тест — Рекурсия'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`sum(4)` е `4 + sum(3)`, което се развива до `4 + 3 + 2 + 1`, тоест `10`. Рекурсията спира при базовия случай, когато `$n` стигне `0`.

</div>

{% include nav.html %}
