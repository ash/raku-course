---
title: Flattening und Itemisierung
---

{% include menu.html %}

Wenn du ein Array in ein anderes steckst, verschmilzt Raku ihre Elemente _nicht_ automatisch. Betrachte das folgende Programm:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

Das Array `@c` hat nur zwei Elemente: die Arrays `@a` und `@b`. Raku behält jeden Container als einzelnes Element bei, statt seinen Inhalt in das äußere Array auszuschütten. Dasselbe passiert, wenn ein Wert zwischen anderen platziert wird:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Wenn du tatsächlich eine einzelne flache Sequenz haben willst, frage explizit danach mit der Routine `flat`:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemisierung

Manchmal willst du das Gegenteil: einen Container davor schützen, abgeflacht zu werden, auch innerhalb von `flat`. Das Konstrukt `$(...)` _itemisiert_ sein Argument -- es markiert das Ergebnis als einzelnes Element. Vergleiche das vorherige Beispiel mit diesem:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Hier behält `$(@a)` `@a` als ein Element bei, während `@b` weiterhin in seine beiden Werte abgeflacht wird. Das ist wieder die Idee des `$`-Sigils: Ein `$` bedeutet "behandle dies als eine einzelne Sache".

{% include nav.html %}
