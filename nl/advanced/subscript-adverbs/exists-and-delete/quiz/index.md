---
title: Quiz — Subscript-adverbia
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

{:.quiz}
0 | True
1 | False
0 | Nil
0 | (Any)

{% include quiz.html %}

<div class="extended-explanation">

Het adverb `:exists` controleert of de sleutel aanwezig is en geeft een Boolean terug. Er is geen sleutel `z` in de hash, dus het antwoord is `False`.

</div>

{% include nav.html %}
