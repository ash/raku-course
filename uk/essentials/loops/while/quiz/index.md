---
title: Quiz — The while loop
---

{% include menu.html %}

## 1

What does this program print?

```raku
my $n = 10;
while $n {
    $n--;
}
say $n;
```

{:.quiz-select}
0 | Answer: (: 0, 1, −1 :)

## 2

How to prevent this program from running infinitely? Make the necessary changes to the code.

{:.quiz-code .fill}
. | my $n = 5;
. | my $a = 10;
. | while $n {
n a | &nbsp;&nbsp;&nbsp;&nbsp;say $␣<span>-</span>-;
. | }


{% include quiz.html %}

{% include nav.html %}