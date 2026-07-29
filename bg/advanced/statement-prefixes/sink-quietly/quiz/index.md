---
title: Тест — Префикси на инструкции
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Събирането на `10` с неопределената `$v` я третира като `0`, което дава `10`. Нормално това би отпечатало и предупреждение за „неинициализирана стойност", но префиксът `quietly` го потиска, така че се отпечатва само `10`.

</div>

{% include nav.html %}
