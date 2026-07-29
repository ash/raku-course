---
title: 'Тест — make'
translations_gpt:
---

{% include menu.html %}

Коя функция вътре в метод за действие прикачва стойност към текущото съвпадение?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` съхранява стойност върху съвпадението; `made` (или `.ast`) я прочита обратно после. Затова методът за действие изчислява резултата си и го подава на `make`.

</div>

{% include nav.html %}
