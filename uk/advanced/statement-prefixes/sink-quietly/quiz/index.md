---
title: 'Тест — Префікси операторів'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | Попередження, а потім 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Додавання `10` до невизначеного `$v` розглядає його як `0`, даючи `10`. Зазвичай це вивело б іще й попередження про «uninitialized value», але префікс `quietly` його приглушує, тож виводиться лише `10`.

</div>

{% include nav.html %}
