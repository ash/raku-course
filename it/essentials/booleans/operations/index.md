---
title: Operazioni booleane
---

{% include menu.html %}

Puoi eseguire tutte le operazioni standard con i valori booleani: AND, OR e OR esclusivo (o XOR):

```raku
say False && True; # AND
say False || True; # OR
say False ^^ True; # XOR
```

Questo programma stampa i seguenti risultati:

    False
    True
    True

## Negazione

Per negare un valore booleano, usa l'operatore prefisso `!`:

```raku
say !False; # True
```

I valori booleani possono essere memorizzati in variabili scalari:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}