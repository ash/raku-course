---
title: 'Тест — Конвейеры'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

Конвейер отправляет список в `map(* + 5)`, который прибавляет пять к каждому элементу, и собирает
результат в `@r`. Значит, `@r` — это `[15 25 35]`.

</div>

{% include nav.html %}
