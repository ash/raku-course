---
title: 'Quiz — Feeds'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

Der Feed schickt die Liste in `map(* + 5)`, das jedem Element fünf hinzufügt, und sammelt das Ergebnis in `@r`. `@r` ist also `[15 25 35]`.

</div>

{% include nav.html %}
