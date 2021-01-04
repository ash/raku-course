---
title: Quiz — The until loop
---

{% include menu.html %}

## 1

What does this program print?

```raku
my $n = 0;
until $n > 5 {
    $n++;
}
say $n;
```

{:.quiz-select}
6 | Answer: (: 4, 5, 6 :)

## 2

How to make this program to have exactly five iterations?

{:.quiz-code .fill}
. | my $n = 1;
6 5 | until $n == ␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
. | }

{% include quiz.html %}

{% include nav.html %}
