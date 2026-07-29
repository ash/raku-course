---
title: 'Тест — Передавання підпрограм'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Іменовану підпрограму передають із сигілом `&`, тож `&negate` вручає в `apply` саму підпрограму, а не викликає її. Усередині `f(7)` запускає її, і виходить `-7`.

</div>

{% include nav.html %}
