---
title: 'Тест — Зірочка Whatever'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

В індексі гола `*` позначає кількість елементів — тут `5`. Тож `*-2` — це індекс `3`, а елемент за індексом `3` (рахуючи від нуля) — це `8`.

</div>

{% include nav.html %}
