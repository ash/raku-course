---
title: 'Тест — hyper'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`.hyper` разпределя `map` между нишки, но запазва резултатите в първоначалния им ред, така че се държи точно като обикновен `map` — повдигането на всеки елемент на квадрат дава `(1 4 9 16)`.

</div>

{% include nav.html %}
