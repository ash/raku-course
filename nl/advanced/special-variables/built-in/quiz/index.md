---
title: Quiz — Speciale variabelen
---

{% include menu.html %}

Welke ingebouwde variabele bevat de commandoregelargumenten van het programma?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

De commandoregelargumenten komen als een *lijst*, dus de variabele heeft de `@`-sigil en de dynamische `*`-twigil: `@*ARGS`. `%*ENV` is de hash met omgevingsvariabelen, niet de argumenten, en `@*ARGV` is de Perl-schrijfwijze, die Raku niet gebruikt.

</div>

{% include nav.html %}
