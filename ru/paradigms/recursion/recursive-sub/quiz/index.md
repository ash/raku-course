---
title: 'Тест — Рекурсия'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`sum(4)` — это `4 + sum(3)`, что разворачивается в `4 + 3 + 2 + 1`, то есть `10`. Рекурсия
останавливается на базовом случае, когда `$n` доходит до `0`.

</div>

{% include nav.html %}
