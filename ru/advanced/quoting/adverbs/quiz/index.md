---
title: Тест — Наречия кавычек
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` обычно интерполирует скаляры, но наречие, записанное с `!`, *выключает* функцию. Здесь `:!s` отключает интерполяцию скаляров, поэтому `$price` остаётся ровно в том виде, в каком записан, вместо того чтобы быть заменённым на `5`.

</div>

{% include nav.html %}
