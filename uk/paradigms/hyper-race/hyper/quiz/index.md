---
title: 'Тест — hyper'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

`.hyper` розподіляє `map` між потоками, але зберігає результати в початковому порядку, тож поводиться він точно як звичайний `map` — піднесення кожного елемента до квадрата дає `(1 4 9 16)`.

</div>

{% include nav.html %}
