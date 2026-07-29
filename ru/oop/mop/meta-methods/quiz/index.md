---
title: Тест — Протокол метаобъектов
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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
0 | ошибка

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` — это метаметод, вызываемый через `.^` у метаобъекта типа; он перечисляет
атрибуты, объявленные типом, а `.elems` их считает. `Point` объявляет два атрибута, `$.x`
и `$.y`, поэтому печатается `2`.

</div>

{% include nav.html %}
