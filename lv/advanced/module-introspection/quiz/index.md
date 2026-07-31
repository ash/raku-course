---
title: Viktorīna — Stash
translations_gpt:
---

{% include menu.html %}

Modulis `Greeting` eksportē `hello` un definē `our $version`. Ko atgriež `Greeting::.keys.sort`?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` ir moduļa `our` mainīgais, uzskaitīts ar tā sigilu. `EXPORT` ir pakotne, ko Raku automātiski pievieno, lai glabātu `is export` nosaukumus, tāpēc eksportētais `hello` parādās tur, nevis kā atsevišķs pakotnes nosaukums.

</div>

{% include nav.html %}
