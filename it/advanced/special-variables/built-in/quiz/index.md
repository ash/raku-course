---
title: Quiz — Variabili speciali
---

{% include menu.html %}

Quale variabile predefinita contiene gli argomenti da riga di comando del programma?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

Gli argomenti da riga di comando arrivano come una *lista*, quindi la variabile ha il sigillo `@` e il twigil dinamico `*`: `@*ARGS`. `%*ENV` e' l'hash dell'ambiente, non gli argomenti, e `@*ARGV` e' la forma usata in Perl, che Raku non utilizza.

</div>

{% include nav.html %}
