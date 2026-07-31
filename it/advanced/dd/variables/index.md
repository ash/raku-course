---
title: Dump delle variabili
translations_gpt:
---

{% include menu.html %}

Chiama `dd` per vedere cosa contiene una variabile, come faresti con `say`:

```raku
my $var = 42;
dd $var;
```

Insieme al valore, `dd` mostra anche il nome della variabile:

```console
$var = 42
```

Se la variabile ha un tipo dichiarato, appare anche il tipo. Confronta l'output del seguente programma con quello precedente:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Questa è la differenza principale rispetto a `say`: una singola chiamata a `dd` su uno scalare ti dice il nome e, quando noto, il tipo del dato — così puoi inserire diverse chiamate `dd` in un programma e riconoscere comunque quale output appartiene a quale variabile.

Puoi anche fare il dump di strutture dati più complesse, come array o hash. Qui, `dd` stampa una rappresentazione simile a codice del valore:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Nota che l'array annidato resta chiaramente visibile (anche se il nome della variabile non viene stampato). Lo stesso vale per gli hash, le cui chiavi `dd` stampa in ordine alfabetico:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
