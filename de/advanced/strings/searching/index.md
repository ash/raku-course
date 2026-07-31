---
title: In Zeichenketten suchen
---

{% include menu.html %}

Mehrere Methoden beantworten Fragen darüber, was ein String enthält.

Die Methode `contains` prüft, ob ein String irgendwo in einem anderen vorkommt:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Die Methoden `starts-with` und `ends-with` prüfen den Anfang und das Ende eines Strings:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Wenn du die genaue Position eines Teilstrings benötigst, verwende `index`. Die Methode gibt den Index der ersten Uebereinstimmung zurück, gezählt ab Null:

```raku
say 'Raku'.index('k'); # 2
```

Wenn der Teilstring nicht gefunden wird, gibt `index` `Nil` anstelle einer Zahl zurück:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
