---
title: Quiz — Pairs
---

{% include menu.html %}

## 1

Complete the program to print the following output:

    India
    New Delhi

Here is the program:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

What does this program print?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Output: (: (Int), (Array), (Pair) :) | This is a pair `Pair $data = 1 => 2`, where both the key and the value are integers.

{% include quiz.html %}

{% include nav.html %}