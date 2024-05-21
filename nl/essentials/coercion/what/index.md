---
title: Introspectie met `WHAT`
---

{% include menu.html %}

Het is mogelijk om het type gegevens in een variabele te zien door de `WHAT`-methode erop aan te roepen:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

Het type wordt tussen haakjes afgedrukt, zoals weergegeven in de opmerkingen. Bijvoorbeeld, `(Int)` of `(Str)`.

Het is geen probleem om een methode aan te roepen op een letterlijke waarde zelf. Bijvoorbeeld:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Merk op dat in het geval van `-1`, we het getal tussen haakjes plaatsen, omdat `say -1.WHAT` zou proberen het resultaat van `1.WHAT` te negateren, wat leidt tot een uitzondering.

{% include nav.html %}