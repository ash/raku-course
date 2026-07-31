---
title: Тест — Вызов через двоеточие
translations_gpt: 'Тест — Вызов с двоеточием'
---

{% include menu.html %}

Что выведет следующая программа?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

Двоеточие поглощает *весь* остаток выражения как список аргументов, поэтому `substr: 0, 3` — то же самое, что `substr(0, 3)` — оба аргумента передаются. Начиная с индекса `0` и взяв `3` символа, получаем `pro`.

</div>

{% include nav.html %}
