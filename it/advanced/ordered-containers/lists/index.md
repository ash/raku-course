---
title: Liste
translations_gpt:
---

{% include menu.html %}

Una lista è anch'essa una collezione ordinata di valori, ma, a differenza di un array, è _immutabile_: non puoi modificare, aggiungere o rimuovere i suoi elementi. Una lista si scrive come una sequenza di valori separati da virgola, spesso racchiusa tra parentesi:

```raku
my $colours = ('red', 'green', 'blue');
```

Puoi leggere gli elementi di una lista tramite il loro indice, e chiedere quanti sono, proprio come con un array:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

La differenza emerge quando provi a modificare un elemento. Con un array funziona, perché ogni elemento è un contenitore:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Con una lista è un errore, poiché gli elementi di una lista sono semplici valori, non contenitori:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

Il secondo programma si ferma con un messaggio:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Quindi, usa un array (il sigillo `@`) quando hai bisogno di modificare il contenuto, e una lista quando devi solo mantenere una sequenza fissa di valori.

{% include nav.html %}
