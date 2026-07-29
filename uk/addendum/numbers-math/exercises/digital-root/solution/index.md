---
title: Розв'язання вправи «Цифровий корінь»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Знайдіть програму у файлі [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Вивід

```
3
```

## Коментарі

1. `$n.comb` розбиває число на окремі символи-цифри; `[+]` їх додає, автоматично
перетворюючи рядки на числа.

1. Цикл повторюється, поки в результаті ще більше однієї цифри, тож він
зупиняється, щойно `$n` падає нижче за `10`.

{% include nav.html %}
