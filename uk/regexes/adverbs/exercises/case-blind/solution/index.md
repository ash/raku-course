---
title: Розв'язання вправи «Зіставлення без огляду на регістр»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Знайдіть програму у файлі [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Вивід

```
｢WORLD｣
```

## Коментарі

1. Прислівник `:i` змушує зіставлення ігнорувати різницю між великими та малими літерами.

1. Тому шаблон із малих літер збігається з написаним великими літерами `WORLD`.

{% include nav.html %}
