---
title: Introspekcija ar `WHAT`
---

{% include menu.html %}

Ir iespējams redzēt datu tipu mainīgajā, izsaucot `WHAT` metodi uz tā:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

Tips tiek izdrukāts iekavās, kā parādīts komentāros. Piemēram, `(Int)` vai `(Str)`.

Nav problēmu izsaukt metodi uz pašas literāles. Piemēram:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Pamaniet, ka gadījumā ar `-1`, mēs ievietojam skaitli iekavās, jo `say -1.WHAT` mēģinātu noliegt `1.WHAT` rezultātu, kas noved pie izņēmuma.

{% include nav.html %}