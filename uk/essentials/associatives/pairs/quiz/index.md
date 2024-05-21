---
title: Вікторина — Пари
---

{% include menu.html %}

## 1

Доповніть програму, щоб вона вивела наступний результат:

    India
    New Delhi

Ось програма:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

Що виведе ця програма?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Вивід: (: (Int), (Array), (Pair) :) | Це пара `Pair $data = 1 => 2`, де і ключ, і значення є цілими числами.

{% include quiz.html %}

{% include nav.html %}