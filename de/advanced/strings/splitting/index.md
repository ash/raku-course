---
title: Aufteilen und Verbinden
---

{% include menu.html %}

Strings können auf verschiedene Weisen in Teile zerlegt und wieder zusammengesetzt werden.

Die Methode `words` teilt einen String in eine Liste seiner durch Leerzeichen getrennten Wörter auf:

```raku
say 'Hello big World'.words; # (Hello big World)
```

Die Methode `split` teilt einen String an einem Trennzeichen deiner Wahl:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Ein wichtiger Sonderfall ist das Aufteilen am **leeren String** `''`: Dabei wird ein String in seine einzelnen Zeichen zerlegt, aber es wird auch am Anfang und am Ende jeweils ein leerer String eingefügt, sodass das Ergebnis zwei Elemente mehr hat, als man erwarten würde:

```raku
say 'abc'.split('').elems;        # 5 — the three letters, plus an empty string at each end
say 'abc'.split('', :skip-empty); # (a b c) — the :skip-empty adverb drops the empties
```

Um einen String in Zeichen aufzuteilen, eignet sich die Methode `comb` ohne Argumente besser — ohne überflüssige leere Strings:

```raku
say 'Raku'.comb; # (R a k u)
```

In die andere Richtung fügt die Methode `join` eine Liste von Werten zu einem einzelnen String zusammen und setzt dabei ein Trennzeichen dazwischen:

```raku
say <a b c>.join('-'); # a-b-c
```

Zwei weitere Methoden arbeiten mit Teilen eines Strings. Die Methode `substr` extrahiert ein Stück, basierend auf einer Startposition und optional einer Länge:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

Und `trim` entfernt Leerzeichen an beiden Enden eines Strings:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
