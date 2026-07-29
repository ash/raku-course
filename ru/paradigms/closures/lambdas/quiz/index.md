---
title: 'Тест — Лямбды'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Стрелочный блок — это лямбда, прибавляющая аргумент к самому себе. Вызванная с `9`, она
возвращает `9 + 9`, то есть `18`.

</div>

{% include nav.html %}
