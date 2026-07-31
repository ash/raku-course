---
title: Quiz — Transformar un supply
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

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

`map(* ** 2)` produce un supply nuevo que eleva cada valor al cuadrado. El enganche recoge `1, 4, 9` en `@out`.

</div>

{% include nav.html %}
