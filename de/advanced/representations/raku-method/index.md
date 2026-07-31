---
title: Die `.raku`-Methode
---

{% include menu.html %}

Die dritte Darstellungsmethode, `.raku`, gibt einen String mit einer **codeähnlichen** Darstellung des Wertes zurück — idealerweise einen String, den du in ein Programm einfügen könntest, um denselben Wert wiederherzustellen. Jeder Wert in Raku verfügt über diese Methode.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Beachte, wie der String `'Raku'` mit den Anführungszeichen zurückkommt, sodass du auf einen Blick eine Zahl von einem String unterscheiden kannst — genau die Art von Detail, die man beim Debuggen braucht.

Die Methode funktioniert auch für zusammengesetzte Daten, einschließlich verschachtelter Strukturen:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Da `.raku` einen gewöhnlichen String zurückgibt, kannst du ihn überall verwenden, wo ein String erwartet wird, zum Beispiel in einer interpolierten Nachricht:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Verwende `.raku`, wann immer du diese codeähnliche Darstellung als String haben möchtest, um sie mit eigenen Nachrichten zu kombinieren. Sehr bald werden wir `dd` vorstellen, ein Rakudo-Werkzeug, das dieselbe Art von Darstellung in einem Schritt für dich ausgibt.

{% include nav.html %}
