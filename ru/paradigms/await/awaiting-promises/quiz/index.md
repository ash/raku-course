---
title: 'Тест — await'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`await` дожидается завершения единственного промиса и возвращает его результат. Блок вычисляет
`8 * 8`, поэтому `await $p` равно `64`.

</div>

{% include nav.html %}
