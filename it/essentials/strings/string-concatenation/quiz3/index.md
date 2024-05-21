---
title: 'Quiz 1: Concatenare di nuovo le stringhe'
---

{% include menu.html %}

Quali righe sono corrette nel codice Raku per concatenare le stringhe?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Un `+` non concatena le stringhe.
0 | &apos;alpha&apos; . &apos;beta&apos; | Nemmeno un `.`.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Solo il `~` è un operatore di concatenazione di stringhe.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Un tilde è sufficiente. Questa riga è sintatticamente corretta, ma non concatena le stringhe.
0 | α ~ β | Le stringhe devono essere racchiuse tra virgolette.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}