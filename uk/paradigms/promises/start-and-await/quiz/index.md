---
title: 'Тест — Обіцянки'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` виконує блок у фоні й повертає обіцянку. `await` чекає на неї й повертає результат блоку — `100 / 4`, тобто `25`.

</div>

{% include nav.html %}
