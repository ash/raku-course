---
title: 'Quiz — Promises'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` führt den Block im Hintergrund aus und liefert ein Promise. `await` wartet darauf und liefert das Ergebnis des Blocks, `100 / 4`, also `25`.

</div>

{% include nav.html %}
