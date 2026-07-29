---
title: Розв'язання вправи «Видобудьте число»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Знайдіть програму у файлі [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Вивід

```
5
```

## Коментарі

1. Шаблон зіставляється з цифрами та літеральним `kg`, але вбудований блок зберігає лише `$<number>.Int` — ціле число, без одиниці.

1. `made` читає це значення назад: справжню `5`, готову до обчислень, а не текст `5kg`. Це типова робота `make` — перетворити збіг на чисте значення, якого ви насправді хочете.

{% include nav.html %}
