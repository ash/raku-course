---
title: 'Тест — Операторът за поток'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Потокът изпраща `1..6` в `grep(* > 3)`, който запазва `4, 5, 6` и ги съхранява в `@big`. Затова `@big.elems` е `3`.

</div>

{% include nav.html %}
