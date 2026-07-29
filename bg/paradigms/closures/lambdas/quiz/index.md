---
title: 'Тест — Ламбди'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Острият блок е ламбда, която добавя аргумента си към самия него. Извикана с `9`, тя връща `9 + 9`, тоест `18`.

</div>

{% include nav.html %}
