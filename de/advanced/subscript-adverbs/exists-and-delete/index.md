---
title: Exists und delete
---

{% include menu.html %}

Das Adverb `:exists` verwandelt eine Indizierung in eine Frage: Gibt es einen Wert an diesem Schlüssel oder Index? Es gibt einen Boolean zurück, ohne etwas abzurufen:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Dies ist der richtige Weg, um auf einen Schlüssel zu prüfen, denn das einfache Lesen von `%h<plum>` würde entweder einen undefinierten Wert zurückgeben oder, je nach den Daten, den Unterschied zwischen "fehlend" und "vorhanden, aber undefiniert" verbergen.

Das Adverb `:delete` entfernt den Eintrag und gibt den gespeicherten Wert zurück:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

Der Eintrag `apple` ist verschwunden, und der gelöschte Wert `1` wird zurückgegeben, sodass du ihn weiterverwenden kannst.

Beide Adverbien funktionieren auch bei Arrays, über den Index:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Falls du neugierig bist, wie das Array aussieht, nachdem ein mittleres Element entfernt wurde, hier ist die Antwort:

```raku
say @a; # [10 (Any) 30]
```

Eine einheitliche Notation ermöglicht es dir also, Container direkt abzufragen und zu verändern, anstatt auf separate Methoden zurückzugreifen.

{% include nav.html %}
