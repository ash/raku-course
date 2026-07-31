---
title: Unire i thread
translations_gpt:
---

{% include menu.html %}

Per aspettare che un thread finisca, chiamavi sopra `.finish` (scritto anche `.join`). Il programma principale si mette in pausa lì finché il thread non ha finito:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Questo stampa:

```
in the thread
done
```

Poiché `.finish` aspetta, il messaggio del thread compare con certezza prima di `done`. Senza il `.finish` l'ordine sarebbe imprevedibile, e il programma potrebbe persino finire prima che il thread abbia avuto modo di stampare.

Quando avvii parecchi thread, unisci ciascuno per essere sicuro che siano tutti finiti:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

I due thread girano in modo concorrente, e unirli entrambi prima del `say` finale garantisce che `both finished` venga stampato solo quando sono davvero finiti. Unire è il modo di riportare il lavoro concorrente in un punto prevedibile del tuo programma.

Poiché una chiamata di metodo su una [junction](/it/paradigms/junctions) si diffonde a ogni valore che essa contiene, puoi unire più thread in un'unica espressione. Combinali con l'operatore `all` `&` e chiama `.finish` sulla junction:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

Chiamare `.finish` su `$a & $b` lo esegue su entrambi i thread, quindi il programma aspetta finché nessuno dei due sta ancora girando — lo stesso risultato che unirli uno per uno, ma si legge come «finisci entrambi questi» e funziona per qualunque numero di thread uniti con `&`.

{% include nav.html %}
