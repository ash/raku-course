---
title: 'Quiz 1: Concatenating strings again'
---

{% include menu.html %}

¿Cuáles líneas son código Raku correcto para concatenar cadenas?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Un `+` no concatena cadenas.
0 | &apos;alpha&apos; . &apos;beta&apos; | Tampoco un `.`.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Solo el `~` es un operador de concatenación de cadenas.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Una tilde es suficiente. Esta línea es sintácticamente correcta, pero no concatena las cadenas.
0 | α ~ β | Las cadenas necesitan estar entre comillas.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}