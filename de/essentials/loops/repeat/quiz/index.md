---
title: Quiz — Die Wiederholungsschleife
---

{% include menu.html %}

## 1

Wählen Sie `until` oder `while` für dieses Programm. Das Programm sollte nicht in eine Endlosschleife geraten.

{:.quiz-code}
. | my $n = 0;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
until | } ␣␣␣␣␣ $n >= 10;

## 2

Wählen Sie `until` oder `while` auch für dieses Programm.

{:.quiz-code}
. | my $n = 10;
. | repeat {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n<span>-</span>-;
while | } ␣␣␣␣␣ $n > 0;

{% include quiz.html %}

{% include nav.html %}