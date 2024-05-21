---
title: Risinājums uzdevumam ‘Izveidot mainīgos no visiem zināmajiem tipiem’
---

{% include menu.html %}

Iespējams, šis nav tāds programmas veids, ko jūs veidosiet savā praksē. Tomēr ir svarīgi zināt, kā izpētīt reālu programmu daļas.

## Kods

Šeit ir iespējams risinājums, kas izveido mainīgos no četriem minētajiem tipiem un izdrukā to tipus.

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

🦋 Atrodiet programmu failā [types.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/types.raku).

## Izvade

Šī programma izdrukā sekojošu izvadi:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}