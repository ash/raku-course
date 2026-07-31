---
title: Quiz — Matching
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

La corrispondenza `cd` comincia all'indice `2` (i caratteri sono numerati `a`=0, `b`=1, `c`=2). Il metodo `.from` restituisce quella posizione di partenza, non il testo corrispondente.

</div>

{% include nav.html %}
