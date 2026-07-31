---
title: Quiz — Tipi nativi
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Quando si introspeziona un valore nativo, viene automaticamente *boxed* nel tipo completo corrispondente. Quindi, anche se `$n` è dichiarato come `int` nativo, chiedere il nome del tipo tramite `.^name` restituisce il tipo boxed `Int`.

</div>

{% include nav.html %}
