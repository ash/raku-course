---
title: 'Решение: Зацензурьте слово'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Исходный код можно найти в файле [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Вывод

```
*** *** plan
```

## Комментарии

1. Оператор `s///` заменяет совпавшее `secret` буквальным текстом `***`, записанным без кавычек,
и изменяет `$s` на месте.

1. Именно наречие `:g` заставляет его заменить **оба** вхождения. Без него зацензурено было бы
только первое `secret`.

{% include nav.html %}
