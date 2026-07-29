---
title: 'Решение: Създайте умножител'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Изход

```
14
21
```

## Коментари

1. `multiplier(2)` връща подпрограма, която помни, че `$n` е `2`; `multiplier(3)` връща отделна подпрограма, която помни `3`.

1. Всяка върната подпрограма пази собственото си `$n`, така че `double(7)` дава `14`, а `triple(7)` — `21`: две независими функции, изградени от една и съща фабрика.

{% include nav.html %}
