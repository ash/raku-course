---
title: 'Тест — Дерево збігу'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Кожен токен стає іменованою гілкою дерева збігу. `<y>` на результаті дістає токен `y`, який зіставився з `4`, тож програма друкує `｢4｣`.

</div>

{% include nav.html %}
