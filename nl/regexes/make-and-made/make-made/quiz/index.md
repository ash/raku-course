---
title: 'Quiz — make en made'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Het inline blok bewaart `$<number>.Int ** 2` op de match. Het token captureerde `5`; dat naar het gehele getal `5` omzetten en kwadrateren geeft `25`, wat `made` teruggeeft.

</div>

{% include nav.html %}
