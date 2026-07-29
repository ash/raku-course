---
title: Розв'язання вправи «Число через proto»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Знайдіть програму у файлі [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Вивід

```
True
```

## Коментарі

1. Прототокен `number` має два варіанти: `dec` та `hex`.

1. Для `0xff` варіант `dec` зіставляється лише з початковим `0`, після чого залишилося б `xff`; варіант `hex` зіставляється з усім рядком. Тому за правилом найдовшого токена обирається `hex`, і рядок розбирається. Та сама граматика й далі приймає звичайне десяткове число на кшталт `42`.

{% include nav.html %}
