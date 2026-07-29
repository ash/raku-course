---
title: 'Тест — Групиране'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Квадратните скоби групират алтернативата `hello | good` без прихващане, така че шаблонът означава „`hello` или `good`, после `bye`“. В `goodbye` съвпада възможността `good` и след нея следва `bye`, което дава `｢goodbye｣`.

</div>

{% include nav.html %}
