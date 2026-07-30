---
title: Methoden, die Methoden aufrufen
translations_gpt:
---

{% include menu.html %}

Eine Methode kann über `self` eine andere Methode auf demselben Objekt aufrufen:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Innerhalb von `describe` führt der Aufruf `self.area` die Methode `area` auf demselben Kreis aus, und ihr Ergebnis wird für die Beschreibung verwendet.

Sie schreiben `self.area` — mit dem Punkt —, um eine Methode aufzurufen, genau wie sie ein Aufrufer von außen auf einer Instanz aufrufen würde, etwa `$c.describe`. So bauen Sie komplexeres Verhalten aus kleineren Methoden auf, von denen jede eine Aufgabe erledigt.

{% include nav.html %}
