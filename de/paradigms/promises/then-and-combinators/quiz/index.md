---
title: 'Quiz — Promises verbinden'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` liefert die Ergebnisse der beiden Promises in Reihenfolge, `(2, 3)`. Der Reduktions-Metaoperator `[*]` multipliziert sie, was `6` ergibt.

</div>

{% include nav.html %}
