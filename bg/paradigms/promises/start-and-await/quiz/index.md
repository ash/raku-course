---
title: 'Тест — Обещания'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`start` изпълнява блока във фонов режим и връща обещание. `await` го изчаква и връща резултата на блока — `100 / 4`, тоест `25`.

</div>

{% include nav.html %}
