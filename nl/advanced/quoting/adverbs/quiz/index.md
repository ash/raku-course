---
title: Quiz — Aanhalingsadverbia
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` interpoleert normaal gesproken scalars, maar een bijwoord geschreven met een `!` schakelt een functie *uit*. Hier schakelt `:!s` scalaire interpolatie uit, waardoor `$price` precies zo blijft staan als geschreven in plaats van te worden vervangen door `5`.

</div>

{% include nav.html %}
