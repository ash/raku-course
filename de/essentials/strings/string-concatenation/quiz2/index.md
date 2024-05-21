---
title: 'Quiz 1: Verkettung von Zeichenketten und Zahlen'
---

{% include menu.html %}

Raku konvertiert automatisch eine Zahl, wenn Sie sie an eine Zeichenkette anhängen möchten. Wählen Sie in jedem der folgenden Teile die Zeilen aus, die die erforderliche Zeichenkette ausgeben.

## 1

Welche der Zeilen drucken `Alpha2`?

{:.quiz}
1 | say &apos;Alpha2&apos;;
0 | say &apos;Alpha&apos; 2; | Ein Leerzeichen ist hier ein Syntaxfehler.
1 | say &apos;Alpha&apos;, &apos;2&apos;; | Es gibt keine Zeichenkettenverkettung, aber das Ergebnis ist korrekt.
1 | say &apos;Alpha&apos; ~ &apos;2&apos;;
1 | say &apos;Alpha&apos; ~ 2; | Eine Zahl wird in eine Zeichenkette konvertiert und dann verkettet.
0 | say &apos;Alpha&apos; + 2; | Ein `+` führt keine Zeichenkettenverkettung durch.
0 | say &apos;Alpha&apos; . 2; | Ein `.` auch nicht.

## 2

Welche dieser Zeilen drucken `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Zeichenkettenverkettung hier, sogar für Zahlen.
0 | say 1 + 2 + 3; | Ein regulärer arithmetischer Ausdruck.
1 | say &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | Einzelne Zeichen sind auch Zeichenketten.
0 | say &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | Da ein `+` vorhanden ist, werden die Zeichenketten in Zahlen konvertiert.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ &apos;&apos;; | `''` ist eine leere Zeichenkette, daher ändert das Anhängen nichts am Ergebnis.

{% include quiz.html %}

{% include nav.html %}