---
title: Quiz — Supply transformare
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

`map(* ** 2)` novum supply producit quod unumquemque valorem quadrat. Coniunctio `1, 4, 9` in `@out` colligit.

</div>

{% include nav.html %}
