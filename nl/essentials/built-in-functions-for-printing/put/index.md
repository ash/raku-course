---
title: De put routine
---

{% include menu.html %}

Standaard doet de `put` routine hetzelfde als [`print`](../print) maar voegt een nieuwe regel toe aan het einde:

1. Converteert zijn argumenten naar een string door de `Str` methode op hen aan te roepen.
1. Voegt een newline karakter toe.
1. Stuurt het naar de `STDOUT` stream.

Enkele voorbeelden:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

De uitvoer van het programma:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Een nieuwe regel van `put`

De daadwerkelijke karakters die na de uitvoer worden toegevoegd, worden gehaald uit de `nl-out` methode van de uitvoer stream. De standaardwaarde is `\n`.
%%/tipblock

{% include nav.html %}