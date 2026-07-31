---
title: Quiz — Supply
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

La presa gira una volta per ogni valore che il supply emette. Ogni volta rende maiuscolo il valore e lo aggiunge in coda a `$out`, quindi `a`, `b`, `c` diventano `A`, `B`, `C`, uniti in `ABC`. Il blocco reagisce all'intero flusso, non solo all'ultimo valore — ed è per questo che la risposta non è semplicemente `C`.

</div>

{% include nav.html %}
