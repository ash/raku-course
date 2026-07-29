---
title: 'Тест — await'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` изчаква единственото обещание да приключи и връща резултата му. Блокът изчислява `8 * 8`, така че `await $p` е `64`.

</div>

{% include nav.html %}
