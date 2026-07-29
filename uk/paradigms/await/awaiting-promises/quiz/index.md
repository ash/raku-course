---
title: 'Тест — await'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

`await` чекає завершення єдиної обіцянки й повертає її результат. Блок обчислює `8 * 8`, тож `await $p` дорівнює `64`.

</div>

{% include nav.html %}
