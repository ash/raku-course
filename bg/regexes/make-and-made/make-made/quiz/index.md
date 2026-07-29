---
title: 'Тест — make и made'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Вграденият блок съхранява върху съвпадението `$<number>.Int ** 2`. Токенът прихвана `5`; превръщането му в цялото число `5` и повдигането на квадрат дават `25`, което `made` връща.

</div>

{% include nav.html %}
