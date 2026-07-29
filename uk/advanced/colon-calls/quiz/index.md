---
title: 'Тест — Виклик із двокрапкою'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Двокрапка поглинає *всю* решту оператора як список аргументів, тож `substr: 0, 3` — це те саме, що `substr(0, 3)`: передаються обидва аргументи. Починаючи з індексу `0` і беручи `3` символи, отримуємо `pro`.

</div>

{% include nav.html %}
