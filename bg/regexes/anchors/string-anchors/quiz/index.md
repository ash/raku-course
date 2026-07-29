---
title: 'Тест — Котви за низ'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Забележете `$` в края на шаблона.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Котвата `$` изисква съвпадението да завършва в самия край на низа. Низът `hello world` наистина завършва с `world`, така че закотвеният шаблон успява и `so` връща `True`.

</div>

{% include nav.html %}
