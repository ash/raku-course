---
title: Typen mit Präfixoperatoren konvertieren
---

{% include menu.html %}

Eine weitere Möglichkeit, den Typ eines Objekts zu transformieren, ist die Verwendung von Präfixoperatoren. Dies sind einstellige Operatoren, die unmittelbar vor dem Wert (oder einer Variablen) platziert werden.

`~` | String-Koerzierung
`+` | Numerische Koerzierung
`?` | Boolesche Koerzierung

Betrachten Sie ein Beispiel für die Erstellung eines Booleschen Werts aus einem Integer:

```raku
say ?42; # True
```

Die Konvertierung in einen String ist ähnlich:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, da "-30" 3 Zeichen hat
```

Beachten Sie, dass sich bei der numerischen Konvertierung der Typ des konvertierten Werts je nach Zahl unterscheidet. Vergleichen Sie die folgenden Konvertierungen von Strings:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Für Boolesche Konvertierungen gibt es eine weitere Routine namens `so`. Sie können sie als Präfixoperator oder als Methode verwenden:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}