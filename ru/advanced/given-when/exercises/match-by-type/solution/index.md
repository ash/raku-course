---
title: 'Решение: Сопоставление по типу'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Исходный код можно найти в файле [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Вывод

```
rational
```

## Комментарии

1. Когда значение для сопоставления является типом, умное сопоставление проверяет, *принадлежит ли* топик этому типу. `3.14` не является `Int`, поэтому первый `when` пропускается.

1. Десятичный литерал вроде `3.14` в Raku является `Rat` (рациональным числом), поэтому второй `when` совпадает, и программа печатает `rational`.

{% include nav.html %}
