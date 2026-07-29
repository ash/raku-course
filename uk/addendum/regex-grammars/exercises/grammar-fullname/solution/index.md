---
title: Розв'язання вправи «Граматика для повних імен»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Знайдіть програму у файлі [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Вивід

```
Grace
Hopper
```

## Коментарі

1. Токен `TOP` є місцем, де починається розбір; він посилається на інші токени за
іменем через `<first>` та `<last>`, які стають ключами на збігу.

1. `$match<first>` є об'єктом збігу; префіксний `~` перетворює його на звичайний
знайдений текст.

{% include nav.html %}
