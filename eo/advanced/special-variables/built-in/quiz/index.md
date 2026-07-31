---
title: Kvizo — Specialaj variabloj
translations_gpt:
---

{% include menu.html %}

Kiu enkonstruita variablo enhavas la komandliniajn argumentojn de la programo?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

La komandliniaj argumentoj venas kiel *listo*, do la variablo havas la sigelon `@` kaj la dinamikan tvigilon `*`: `@*ARGS`. `%*ENV` estas la medio-hakilo, ne la argumentoj, kaj `@*ARGV` estas la Perl-a skribo, kiun Raku ne uzas.

</div>

{% include nav.html %}
