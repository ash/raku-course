---
title: Quiz — Lo Stash
translations_gpt:
---

{% include menu.html %}

Il modulo `Greeting` esporta `hello` e definisce `our $version`. Cosa restituisce `Greeting::.keys.sort`?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` è la variabile `our` del modulo, elencata con il suo sigillo. `EXPORT` è il package che Raku aggiunge automaticamente per contenere i nomi con `is export`, quindi la subroutine esportata `hello` compare lì anziché come nome proprio del package.

</div>

{% include nav.html %}
