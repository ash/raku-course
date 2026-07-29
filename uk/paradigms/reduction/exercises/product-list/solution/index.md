---
title: Розв'язання вправи «Добуток списку»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say [*] 1..6;
```

🦋 Знайдіть програму у файлі [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Вивід

```
720
```

## Коментарі

1. `[*]` вставляє `*` між кожним елементом діапазону, перемножуючи їх усі.

1. `1 * 2 * 3 * 4 * 5 * 6` дорівнює `720` — тобто факторіалу `6`.

{% include nav.html %}
