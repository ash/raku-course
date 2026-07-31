---
title: Sequenzen
---

{% include menu.html %}

Eine _Sequenz_ ist eine geordnete Reihe von Werten, die nacheinander erzeugt werden. Raku erstellt Sequenzen mit dem `...`-Operator, der das Muster aus den angegebenen Werten erkennt und den Rest bis zu einem Endpunkt generiert.

Der einfachste Fall zählt von einem Wert zu einem anderen:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Wenn du zwei Startwerte angibst, nimmt Raku den Schritt zwischen ihnen und fährt mit demselben Schritt fort. So erstellst du eine arithmetische Sequenz:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Hier setzen die Startwerte `1, 3` den Schritt auf zwei, sodass Raku in Zweierschritten hochzählt und stoppt, sobald `11` erreicht ist.

Der von `...` erzeugte Wert ist vom Typ `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

Die folgenden Themen zeigen weitere Muster, die der `...`-Operator erkennen kann, und wie eine Sequenz lazy sein kann — sogar unendlich.

{% include nav.html %}
