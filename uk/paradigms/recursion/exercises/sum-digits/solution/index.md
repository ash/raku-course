---
title: Розв'язання вправи «Сума цифр»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Знайдіть програму у файлі [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Вивід

```
10
```

## Коментарі

1. Базовим випадком є однозначне число, яке само собі є сумою цифр.

1. Інакше `$n % 10` — це остання цифра, а `$n div 10` її відкидає; `1 + 2 + 3 + 4` дорівнює `10`.

{% include nav.html %}
