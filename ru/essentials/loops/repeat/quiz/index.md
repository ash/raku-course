---
title: Викторина — Цикл repeat
---

{% include menu.html %}

## 1

Выберите `until` или `while` для этой программы. Программа не должна входить в бесконечный цикл.

{:.quiz-code}
. | my $n = 0;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
until | } ␣␣␣␣␣ $n >= 10;

## 2

Выберите `until` или `while` для этой программы тоже.

{:.quiz-code}
. | my $n = 10;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n<span>-</span>-;
while | } ␣␣␣␣␣ $n > 0;

{% include quiz.html %}

{% include nav.html %}