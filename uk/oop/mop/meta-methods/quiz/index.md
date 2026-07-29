---
title: 'Тест — MOP'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

{:.quiz}
0 | 1
1 | 2
0 | (Point)
0 | помилку

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` — це метаметод, який викликають через `.^` для метаоб'єкта типу; він перелічує атрибути, оголошені типом, а `.elems` їх рахує. `Point` оголошує два атрибути, `$.x` та `$.y`, тож виводиться `2`.

</div>

{% include nav.html %}
