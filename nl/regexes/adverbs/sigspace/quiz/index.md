---
title: 'Quiz — Bijwoorden'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Let op het bijwoord `:s` en de reeks spaties in de tekst.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Het bijwoord `:s` maakt de spatie tussen `hello` en `world` in het patroon betekenisvol — het eist daar witruimte. Een of meer spaties tellen allemaal mee, dus de reeks van drie spaties in de tekst matcht en het resultaat is `True`. Zonder `:s` zou de spatie in het patroon genegeerd worden en zou het patroon naar `helloworld` zoeken.

</div>

{% include nav.html %}
