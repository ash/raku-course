---
title: 'Тест — make'
translations_gpt:
---

{% include menu.html %}

Яка функція всередині методу дії прикріплює значення до поточного збігу?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` зберігає значення на збігу; `made` (або `.ast`) читає його назад опісля. Тож метод дії обчислює свій результат і передає його в `make`.

</div>

{% include nav.html %}
