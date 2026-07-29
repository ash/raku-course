---
title: Розв'язання вправи «Рівно одне»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say so one(1, 2, 3) == 2;
```

🦋 Знайдіть програму у файлі [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Вивід

```
True
```

## Коментарі

1. З'єднання `one` істинне лише тоді, коли порівнянню відповідає **рівно одне** значення.

1. Рівно одне з `1, 2, 3` дорівнює `2`, тож результатом є `True`. Якби підходили два (або жодне), вийшло б `False`. `so` згортає з'єднання до звичайного булевого значення.

{% include nav.html %}
