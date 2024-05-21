---
title: Quiz — The repeat loop
---

{% include menu.html %}

## 1

Choose `until` or `while` for this program. The program should not enter into an infinite loop.

{:.quiz-code}
. | my $n = 0;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
until | } ␣␣␣␣␣ $n >= 10;

## 2

Choose `until` or `while` for this program, too.

{:.quiz-code}
. | my $n = 10;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n<span>-</span>-;
while | } ␣␣␣␣␣ $n > 0;

{% include quiz.html %}

{% include nav.html %}