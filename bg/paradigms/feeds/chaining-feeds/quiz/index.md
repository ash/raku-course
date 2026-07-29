---
title: 'Тест — Потоци'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Потокът изпраща списъка в `map(* + 5)`, който добавя пет към всеки елемент, и събира резултата в `@r`. Затова `@r` е `[15 25 35]`.

</div>

{% include nav.html %}
