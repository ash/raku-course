---
title: Soluzione di ‘Creare variabili di tutti i tipi conosciuti’
---

{% include menu.html %}

Probabilmente, questo non è il tipo di programmi che creerai nella tua pratica. Tuttavia, è importante sapere come introspezionare le parti dei programmi reali.

## Codice

Ecco una possibile soluzione che crea le variabili dei quattro tipi menzionati e stampa i loro tipi.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Trova il programma nel file [types.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/types.raku).

## Output

Questo programma stampa il seguente output:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}