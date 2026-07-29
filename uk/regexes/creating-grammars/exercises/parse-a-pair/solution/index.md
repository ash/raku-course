---
title: Розв'язання вправи «Розбір повного імені»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Знайдіть програму у файлі [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Вивід

```
｢Hopper｣
```

## Коментарі

1. `TOP` описує все ім'я цілком; `first` та `last` описують його частини, з літеральним пробілом між ними.

1. Після розбору кожен токен є іменованим захопленням, тож прізвище читають як `<last>` на об'єкті збігу.

{% include nav.html %}
