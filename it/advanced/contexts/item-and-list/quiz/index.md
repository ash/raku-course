---
title: Quiz — Contesto elemento
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Il contestualizzatore `$( … )` forza il contesto elemento, quindi l'array viene trattato come un singolo valore piuttosto che come una lista di elementi. Il ciclo `for` vede quindi un solo elemento ed esegue il suo corpo una sola volta, lasciando `$n` a `1`. Senza `$( )`, il ciclo itererebbe tre volte.

</div>

{% include nav.html %}
