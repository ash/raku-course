---
title: 'Решение: Присваивание с пробелами'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Исходный код можно найти в файле [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Вывод

```
True
```

## Комментарии

1. Поскольку `TOP` объявлен как `rule`, пробелы в шаблоне разрешают пробельные символы вокруг
`=` во вводе.

1. Поэтому `'x = 5'` разбирается. Будь `TOP` объявлен как `token`, подошло бы только `'x=5'`.

Пробелы, которые разрешает `rule`, **необязательны**, а не обязательны: значимый пробел
с тем же успехом сопоставляется и с *нулём* пробелов, поэтому запись без пробелов тоже
разбирается:

```raku
say Assign.parse('x=5').defined; # True
```

Таким образом, `rule` одинаково принимает и `'x = 5'`, и `'x=5'`, и даже `'x =5'` — гибкость
без необходимости расписывать, где пробел может стоять, а где нет.

{% include nav.html %}
