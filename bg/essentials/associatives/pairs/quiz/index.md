---
title: Тест — Двойки
---

{% include menu.html %}

## 1

Завършете програмата, за да отпечатате следния изход:

    India
    New Delhi

Ето програмата:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

Какво отпечатва тази програма?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Output: (: (Int), (Array), (Pair) :) | Това е двойка `Pair $data = 1 => 2`, където както ключът, така и стойността са цели числа.

{% include quiz.html %}

{% include nav.html %}