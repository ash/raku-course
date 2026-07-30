---
title: Quiz — De Stash
translations_gpt:
---

{% include menu.html %}

De `Greeting`-module exporteert `hello` en definieert `our $version`. Wat geeft `Greeting::.keys.sort` terug?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` is de `our`-variabele van de module, weergegeven met zijn sigil. `EXPORT` is het pakket dat Raku automatisch toevoegt om de `is export`-namen te bevatten, dus de geëxporteerde `hello` verschijnt daar in plaats van als een eigen pakketnaam.

</div>

{% include nav.html %}
