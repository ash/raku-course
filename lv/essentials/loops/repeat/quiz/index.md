---
title: Viktorīna — Atkārtošanas cikls
---

{% include menu.html %}

## 1

Izvēlieties `until` vai `while` šai programmai. Programmai nevajadzētu nonākt bezgalīgā ciklā.

{:.quiz-code}
. | my $n = 0;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
until | } ␣␣␣␣␣ $n >= 10;

## 2

Izvēlieties `until` vai `while` arī šai programmai.

{:.quiz-code}
. | my $n = 10;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n<span>-</span>-;
while | } ␣␣␣␣␣ $n > 0;

{% include quiz.html %}

{% include nav.html %}