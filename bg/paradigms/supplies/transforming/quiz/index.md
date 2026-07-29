---
title: 'Тест — Преобразуване на поток от стойности'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my @out;
Supply.from-list(1, 2, 3).map(* ** 2).tap(-> $v { @out.push($v) });
say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [1 4 9]
0 | [2 4 6]
0 | 14

{% include quiz.html %}

<div class="extended-explanation">

`map(* ** 2)` произвежда нов поток, който повдига всяка стойност на квадрат. Включването събира `1, 4, 9` в `@out`.

</div>

{% include nav.html %}
