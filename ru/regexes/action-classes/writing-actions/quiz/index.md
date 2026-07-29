---
title: 'Тест — make'
translations_gpt:
---

{% include menu.html %}

Какая функция внутри метода действий прикрепляет значение к текущему совпадению?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` сохраняет значение на совпадении, а `made` (или `.ast`) читает его обратно потом. Значит,
метод действий вычисляет свой результат и передаёт его в `make`.

</div>

{% include nav.html %}
