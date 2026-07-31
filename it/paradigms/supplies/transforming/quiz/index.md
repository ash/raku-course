---
title: Quiz — Trasformare un supply
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @out;
Supply.from-list(1, 2, 3).map(* ** 2).tap(-> $v { @out.push($v) });
say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [1 4 9]
0 | [2 4 6]
0 | 14

{% include quiz.html %}

<div class="extended-explanation">

`map(* ** 2)` produce un nuovo supply che eleva al quadrato ogni valore. La presa raccoglie `1, 4, 9` in `@out`.

</div>

{% include nav.html %}
