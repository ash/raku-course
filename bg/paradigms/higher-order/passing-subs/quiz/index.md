---
title: 'Тест — Подаване на подпрограми'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

Именуваната подпрограма се подава със сигила `&`, така че `&negate` предава на `apply` самата подпрограма, вместо да я извиква. Вътре `f(7)` я изпълнява и се получава `-7`.

</div>

{% include nav.html %}
