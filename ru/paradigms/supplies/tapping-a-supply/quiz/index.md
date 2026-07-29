---
title: 'Тест — Supply'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

Подключение выполняется по разу для каждого значения, выданного supply. Каждый раз оно переводит
значение в верхний регистр и дописывает к `$out`, поэтому `a`, `b`, `c` превращаются в `A`, `B`,
`C` и складываются в `ABC`. Блок реагирует на весь поток, а не только на последнее значение, —
поэтому ответ не просто `C`.

</div>

{% include nav.html %}
