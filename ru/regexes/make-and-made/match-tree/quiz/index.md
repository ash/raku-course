---
title: 'Тест — Дерево совпадения'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Каждый токен становится именованной ветвью дерева совпадения. Обращение `<y>` у результата
добирается до токена `y`, который совпал с `4`, поэтому программа печатает `｢4｣`.

</div>

{% include nav.html %}
