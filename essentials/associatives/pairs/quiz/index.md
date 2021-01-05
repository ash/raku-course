---
title: Quiz — Pairs
---

{% include menu.html %}

## 1

Complete the program so that it prints the following output:

    India
    New Delhi

Here is the program:

{:.quiz-code}
. | my $city = India => 'New Dehli';
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
