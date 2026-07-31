---
title: Kvizo — La Stash
translations_gpt:
---

{% include menu.html %}

La modulo `Greeting` eksportas `hello` kaj difinas `our $version`. Kion redonas `Greeting::.keys.sort`?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` estas la `our`-variablo de la modulo, listigita kun sia sigelo. `EXPORT` estas la pakaĵo, kiun Raku aldonas aŭtomate por porti la nomojn markitajn per `is export`, do la eksportita `hello` aperas tie anstataŭ kiel propra pakaĵnomo.

</div>

{% include nav.html %}
