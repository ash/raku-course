---
title: Викторина — Цикълът repeat
---

{% include menu.html %}

## 1

Изберете `until` или `while` за тази програма. Програмата не трябва да влиза в безкраен цикъл.

{:.quiz-code}
. | my $n = 0;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
until | } ␣␣␣␣␣ $n >= 10;

## 2

Изберете `until` или `while` и за тази програма.

{:.quiz-code}
. | my $n = 10;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n<span>-</span>-;
while | } ␣␣␣␣␣ $n > 0;

{% include quiz.html %}

{% include nav.html %}