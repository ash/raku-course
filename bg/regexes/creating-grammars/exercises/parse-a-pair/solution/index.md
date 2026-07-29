---
title: 'Решение: Разбор на пълно име'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Намерете програмата във файла [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Изход

```
｢Hopper｣
```

## Коментари

1. `TOP` описва цялото име; `first` и `last` описват частите му, с буквален интервал между тях.

1. След разбора всеки токен е именувано прихващане, така че фамилията се чете като `<last>` върху обекта на съвпадението.

{% include nav.html %}
