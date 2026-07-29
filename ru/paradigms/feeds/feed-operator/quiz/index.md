---
title: 'Тест — Оператор конвейера'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

Конвейер отправляет `1..6` в `grep(* > 3)`, который оставляет `4, 5, 6` и складывает их в `@big`.
Значит, `@big.elems` равно `3`.

</div>

{% include nav.html %}
