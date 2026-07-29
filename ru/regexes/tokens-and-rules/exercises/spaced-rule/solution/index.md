---
title: 'Решение: Правило с пробелами'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Исходный код можно найти в файле [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Вывод

```
True
```

## Комментарии

1. Поскольку `TOP` объявлен как `rule`, каждый пробел, записанный между вызовами `<word>`,
требует пробельного символа во вводе.

1. В строке `'the quick fox'` пробелы стоят между всеми тремя словами, поэтому она разбирается.
Будь `TOP` объявлен как `token`, пробелы в шаблоне игнорировались бы и разбор не удался бы.

{% include nav.html %}
