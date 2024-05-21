---
title: 'Quiz 1: Strings opnieuw samenvoegen'
---

{% include menu.html %}

Welke regels zijn correcte Raku-code om strings samen te voegen?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Een `+` voegt geen strings samen.
0 | &apos;alpha&apos; . &apos;beta&apos; | Een `.` doet dat ook niet.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Alleen de `~` is een operator voor het samenvoegen van strings.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Eén tilde is genoeg. Deze regel is syntactisch correct, maar voegt de strings niet samen.
0 | α ~ β | Strings moeten tussen aanhalingstekens staan.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}