---
title: 'Тест — Перелічення'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | помилку

{% include quiz.html %}

<div class="extended-explanation">

Кожна константа позначає число, призначене від нуля в порядку переліку: `red` — це `0`, `green` — `1`, `blue` — `2`. В арифметичному контексті константи поводяться як ці числа, тож `green + blue` — це `1 + 2`, тобто `3`.

</div>

{% include nav.html %}
