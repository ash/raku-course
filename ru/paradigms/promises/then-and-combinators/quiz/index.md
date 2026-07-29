---
title: 'Тест — Комбинирование промисов'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` возвращает результаты двух промисов по порядку — `(2, 3)`. Метаоператор свёртки
`[*]` их перемножает, давая `6`.

</div>

{% include nav.html %}
