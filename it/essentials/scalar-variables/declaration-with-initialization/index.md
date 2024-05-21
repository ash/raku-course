---
title: Dichiarazione con inizializzazione
---

{% include menu.html %}

Se conosci il valore che vuoi mettere in una variabile al momento della creazione della variabile, puoi risparmiare una riga di codice e scriverlo in un'unica istruzione:

```raku
my $name = 'Anna';
say $name;
```

## Variabili multiple

Per creare e assegnare più di una variabile, usa il seguente schema:

```raku
my ($name, $age) = 'Carl', 36;
```

{% include nav.html %}