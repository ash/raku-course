---
title: 'Тест — Розумне зіставлення'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма? Зверніть увагу, що цього разу немає `so`, а зіставлення використовує форму `m/.../`.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` зіставляється так само, як зіставився б `/sat/`. Без `so`, який звів би результат до булевого значення, розумне зіставлення повертає сам об'єкт збігу, і `say` виводить його між кутовими дужками як `｢sat｣`.

</div>

{% include nav.html %}
