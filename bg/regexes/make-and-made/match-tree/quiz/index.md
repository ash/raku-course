---
title: 'Тест — Дървото на съвпадението'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
grammar Point {
    token TOP { <x> ',' <y> }
    token x   { \d+ }
    token y   { \d+ }
}

say Point.parse('3,4')<y>;
```

{:.quiz}
0 | ｢3｣
1 | ｢4｣
0 | ｢3,4｣
0 | ｢y｣

{% include quiz.html %}

<div class="extended-explanation">

Всеки токен става именуван клон на дървото на съвпадението. `<y>` върху резултата стига до токена `y`, който съвпадна с `4`, така че програмата отпечатва `｢4｣`.

</div>

{% include nav.html %}
