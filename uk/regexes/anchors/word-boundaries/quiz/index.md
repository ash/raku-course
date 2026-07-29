---
title: 'Тест — Якорі'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Шаблон вимагає, щоб `dog` було цілим словом. У `I have a dog` слово `dog` стоїть окремо: перед ним пробіл, а після нього кінець рядка, — тож межа слова є з обох боків, збіг вдається, і `so` повертає `True`.

</div>

{% include nav.html %}
