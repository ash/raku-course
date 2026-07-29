---
title: 'Тест — Множини'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
say (set(1, 2) ∪ set(2, 3)).elems;
```

{:.quiz}
1 | 3
0 | 4
0 | 2
0 | 1

{% include quiz.html %}

<div class="extended-explanation">

Об'єднання збирає кожне значення з обох множин, але множина зберігає кожне значення лише раз. Обидві множини мають спільну `2`, тож об'єднанням є `{1, 2, 3}` — три різні елементи.

</div>

{% include nav.html %}
