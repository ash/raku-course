---
title: 'Тест — Наріччя цитування'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

`qq` зазвичай інтерполює скаляри, але наріччя, записане з `!`, *вимикає* можливість. Тут `:!s` вимикає інтерполяцію скалярів, тож `$price` залишається точно таким, як записано, а не замінюється на `5`.

</div>

{% include nav.html %}
