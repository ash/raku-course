---
title: 'Решение: Разберите полное имя'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Исходный код можно найти в файле [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Вывод

```
｢Hopper｣
```

## Комментарии

1. `TOP` описывает имя целиком; `first` и `last` описывают его части, а между ними стоит
буквальный пробел.

1. После разбора каждый токен становится именованным захватом, поэтому фамилию читают
у объекта совпадения как `<last>`.

{% include nav.html %}
