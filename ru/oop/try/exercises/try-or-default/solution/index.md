---
title: 'Решение: Попытка или значение по умолчанию'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Исходный код можно найти в файле [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Вывод

```
default
```

## Комментарии

1. Блок `try`, давший сбой, вычисляется в неопределённое значение.

1. Поэтому оператор `//` возвращает свою правую часть, `'default'`, давая аккуратный способ
восстановиться с запасным значением в одну строку.

{% include nav.html %}
