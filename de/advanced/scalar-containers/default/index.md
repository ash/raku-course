---
title: Standardwerte
---

{% include menu.html %}

Wenn eine neue skalare Variable ohne sofortige Zuweisung erstellt wird, enthält der Container dennoch einen Wert -- seinen Standardwert. Der genaue Standardwert hängt vom Typ der Variable ab.

Das folgende Programm ist nicht die beste Art, Raku zu verwenden, aber es verdeutlicht den Punkt:

```raku
my $int;
say $int + 5;
```

Die Ausgabe enthält `5`, was du vielleicht erwartet hast, wenn du angenommen hast, dass der Standardwert von `$int` `0` ist. Allerdings gibt das Programm auch eine Warnung aus:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Um diese Unsicherheit zu beseitigen, weise entweder explizit einen Wert zu:

```raku
my $int = 0;
say $int + 5; # 5
```

Oder deklariere einen Standardwert mit dem Trait `is default`:

```raku
my $int is default(0);
say $int + 5; # 5
```

Der Standardwert ist nicht auf Null beschränkt. Es kann jeder Wert sein, den du für geeignet hältst, zum Beispiel:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
