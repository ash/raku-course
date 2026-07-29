---
title: Розв'язання вправи «Множник»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Знайдіть програму у файлі [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Вивід

```
12
```

## Коментарі

1. Повернений гострий блок замикається на `$factor`, пам'ятаючи, що той дорівнює `3`.

1. Виклик його з `4` дає `12`.

{% include nav.html %}
