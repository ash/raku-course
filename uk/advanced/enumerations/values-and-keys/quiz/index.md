---
title: 'Тест — Значення перелічення'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` дає число, що стоїть за константою, а `.key` дає її *ім'я* у вигляді рядка. Тож `Tue.key` — це `Tue`, незалежно від числа `2`, яке їй призначили.

</div>

{% include nav.html %}
