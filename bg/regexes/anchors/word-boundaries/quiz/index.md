---
title: 'Тест — Котви'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Шаблонът изисква `dog` да бъде цяла дума. В `I have a dog` `dog` стои самостоятелно, с интервал преди себе си и края на низа след себе си, така че има граница на дума от двете страни, съвпадението успява и `so` връща `True`.

</div>

{% include nav.html %}
