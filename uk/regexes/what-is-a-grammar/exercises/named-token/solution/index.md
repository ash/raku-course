---
title: Розв'язання вправи «Іменований токен»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Знайдіть програму у файлі [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Вивід

```
｢hello｣
```

## Коментарі

1. `my regex word { \w+ }` дає шаблонові ім'я, щоб його можна було використовувати повторно.

1. Запис `<word>` у шаблоні зіставляється з ним і захоплює результат під тим самим іменем, доступним як `$<word>`. Перша послідовність словесних символів — це `hello`.

{% include nav.html %}
