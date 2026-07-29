---
title: 'Тест — hyper'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` распределяет `map` по потокам, но оставляет результаты в исходном порядке, поэтому
он ведёт себя точно как обычный `map`: возведение каждого элемента в квадрат даёт `(1 4 9 16)`.

</div>

{% include nav.html %}
