---
title: Тест — Извикване с двоеточие
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Двоеточието поглъща *целия* остатък от израза като списък с аргументи, така че `substr: 0, 3` е същото като `substr(0, 3)` -- и двата аргумента се подават. Започвайки от индекс `0` и вземайки `3` символа, получаваме `pro`.

</div>

{% include nav.html %}
