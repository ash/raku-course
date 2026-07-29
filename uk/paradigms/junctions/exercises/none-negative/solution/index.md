---
title: Розв'язання вправи «Жодного від'ємного»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say so none(3, 7, 2) < 0;
```

🦋 Знайдіть програму у файлі [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Вивід

```
True
```

## Коментарі

1. З'єднання `none` істинне тоді, коли не підходить **жодне** значення.

1. Жодне з `3, 7, 2` не менше за нуль, тож результатом є `True`. Одне-єдине від'ємне значення зробило б його `False`.

{% include nav.html %}
