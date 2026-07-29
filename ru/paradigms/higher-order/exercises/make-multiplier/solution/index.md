---
title: 'Решение: Создайте умножитель'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Исходный код можно найти в файле [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Вывод

```
14
21
```

## Комментарии

1. `multiplier(2)` возвращает подпрограмму, которая помнит, что `$n` равно `2`; `multiplier(3)`
возвращает отдельную подпрограмму, помнящую `3`.

1. Каждая возвращённая подпрограмма держит собственное `$n`, поэтому `double(7)` даёт `14`,
а `triple(7)` — `21`: две независимые функции, построенные одной и той же фабрикой.

{% include nav.html %}
