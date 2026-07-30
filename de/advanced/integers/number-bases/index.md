---
title: Zahlensysteme
---

{% include menu.html %}

Ein Integer-Literal muss nicht im Dezimalsystem geschrieben werden. Raku versteht die drei gaengigsten alternativen Zahlensysteme direkt, jedes mit einem eigenen Praefix:

```raku
say 0xFF;   # 255  — hexadezimal (Basis 16)
say 0b1010; # 10   — binaer (Basis 2)
say 0o17;   # 15   — oktal (Basis 8)
```

Unabhaengig davon, welches Zahlensystem du im Quellcode verwendest, ist der Wert dieselbe ganze Zahl; nur die Schreibweise unterscheidet sich.

Fuer jedes andere Zahlensystem verwende die Radix-Form `:base<number>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Um den umgekehrten Weg zu gehen -- von einer Zahl zu ihrer Darstellung in einem anderen Zahlensystem -- rufe die Methode `base` auf. Sie gibt eine Zeichenkette mit Ziffern zurück:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
