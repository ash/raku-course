---
title: 'Quiz 1: Zeichenketten erneut verketten'
---

{% include menu.html %}

Welche Zeilen sind korrekter Raku-Code, um Zeichenketten zu verketten?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Ein `+` verknüpft keine Zeichenketten.
0 | &apos;alpha&apos; . &apos;beta&apos; | Ein `.` auch nicht.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Nur das `~` ist ein Zeichenketten-Verknüpfungsoperator.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Ein Tilde reicht. Diese Zeile ist syntaktisch korrekt, verknüpft jedoch nicht die Zeichenketten.
0 | α ~ β | Zeichenketten müssen in Anführungszeichen gesetzt werden.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}