---
title: Розв'язання вправи «Створіть множник»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Знайдіть програму у файлі [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Вивід

```
14
21
```

## Коментарі

1. `multiplier(2)` повертає підпрограму, що пам'ятає: `$n` дорівнює `2`; `multiplier(3)` повертає окрему підпрограму, що пам'ятає `3`.

1. Кожна повернена підпрограма тримає власний `$n`, тож `double(7)` дає `14`, а `triple(7)` — `21`: дві незалежні функції, побудовані однією фабрикою.

{% include nav.html %}
