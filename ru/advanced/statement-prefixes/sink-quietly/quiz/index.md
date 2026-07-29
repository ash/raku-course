---
title: Тест — Префиксы инструкций
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

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

Сложение `10` с неопределённым `$v` интерпретирует его как `0`, что даёт `10`. Обычно это также выводит предупреждение о неинициализированном значении, но префикс `quietly` его подавляет, поэтому печатается только `10`.

</div>

{% include nav.html %}
