---
title: 'Тест — make и made'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Встроенный блок сохраняет на совпадении `$<number>.Int ** 2`. Токен захватил `5`; превращение
в целое `5` и возведение в квадрат дают `25`, что и возвращает `made`.

</div>

{% include nav.html %}
