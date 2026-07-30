---
title: Quiz — Slurpy-parameters
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Vaste parameters worden voor de slurpy parameter ingevuld. `$first` krijgt `'a'`, en alleen de twee overige argumenten `'b'` en `'c'` gaan naar `@rest`, dus `.elems` geeft `2`.

</div>

{% include nav.html %}
