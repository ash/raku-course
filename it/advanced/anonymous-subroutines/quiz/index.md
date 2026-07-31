---
title: Quiz — Blocchi pointy
translations_gpt:
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Un blocco a freccia puo elencare diversi parametri: `-> $a, $b` ne accetta due. Qui non viene memorizzato in alcuna variabile: e racchiuso tra parentesi e chiamato immediatamente con `(3, 4)`, associando `$a` a `3` e `$b` a `4`. Il blocco li moltiplica ottenendo `12`, e il `.say` postfisso lo stampa.

</div>

{% include nav.html %}
