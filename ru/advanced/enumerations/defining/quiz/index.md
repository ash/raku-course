---
title: Тест — Перечисления
translations_gpt: true
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Каждая константа представляет число, назначенное от нуля в порядке перечисления: `red` равно `0`, `green` равно `1`, `blue` равно `2`. В арифметическом контексте константы ведут себя как эти числа, поэтому `green + blue` равно `1 + 2`, что дает `3`.

</div>

{% include nav.html %}
