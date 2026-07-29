---
title: Розв'язання вправи «Повторне використання токена»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Знайдіть програму у файлі [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Вивід

```
｢cat｣
｢dog｣
```

## Коментарі

1. Той самий іменований регекс `word` викликано в шаблоні двічі.

1. Коли іменоване захоплення трапляється більш ніж один раз, результати утворюють список, тож їх читають як `$<word>[0]` та `$<word>[1]`.

{% include nav.html %}
