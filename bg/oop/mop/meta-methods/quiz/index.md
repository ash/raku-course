---
title: 'Тест — MOP'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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
0 | грешка

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` е метаметод — извикан с `.^` върху метаобекта на типа, — който изброява атрибутите, декларирани от типа, а `.elems` ги преброява. `Point` декларира два атрибута, `$.x` и `$.y`, така че се отпечатва `2`.

</div>

{% include nav.html %}
