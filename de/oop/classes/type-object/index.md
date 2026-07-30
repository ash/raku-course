---
title: Typobjekte und Instanzen
translations_gpt:
---

{% include menu.html %}

Wenn Sie einen Klassennamen wie `Dog` schreiben, beziehen Sie sich auf das _Typobjekt_ der Klasse. Das Typobjekt steht für den Typ selbst, nicht für ein bestimmtes Objekt dieses Typs. Eine _Instanz_, mit `new` erzeugt, ist ein tatsächliches Objekt.

Raku kann die beiden unterscheiden. Die Methode `defined` liefert `False` für ein Typobjekt und `True` für eine Instanz:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Ein Typobjekt gilt als _undefiniert_, weil es keine konkreten Daten enthält — es ist lediglich die Beschreibung eines Typs. Eine Instanz ist _definiert_: Sie ist ein echtes Objekt.

Beide melden über `WHAT` denselben Typ, das Sie im [Abschnitt über Container](/de/advanced/containers) kennengelernt haben:

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

Die Klammern um `(Dog)` sind Rakus Art, einen Typ darzustellen. `Dog` und `Dog.new` teilen sich also den Typ `Dog`; der Unterschied ist, dass das eine der Typ selbst ist und das andere ein Objekt dieses Typs.

{% include nav.html %}
