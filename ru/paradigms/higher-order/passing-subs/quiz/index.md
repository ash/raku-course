---
title: 'Тест — Передача подпрограмм'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Именованная подпрограмма передаётся с сигилом `&`, поэтому `&negate` отдаёт в `apply` саму
подпрограмму, а не вызывает её. Внутри `f(7)` её выполняет, что даёт `-7`.

</div>

{% include nav.html %}
