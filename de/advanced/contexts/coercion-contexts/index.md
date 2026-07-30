---
title: Numerischer, String- und Boolescher Kontext
---

{% include menu.html %}

Drei sehr häufige Kontexte fordern einen Wert auf, sich als Zahl, als String oder als Boolescher Wert zu verhalten. Jeder hat einen Präfixoperator, der ihn explizit erzwingt:

* `+` -- numerischer Kontext
* `~` -- Stringkontext
* `?` -- Boolescher Kontext

Auf ein Array angewendet, ergeben sie seine Länge, seine durch Leerzeichen verbundenen Elemente und ob es Elemente enthält:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Ein leeres Array ist im numerischen Kontext `0` und im Booleschen Kontext `False`:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Du musst diese Operatoren nicht immer von Hand schreiben, denn die Sprache kann den richtigen Kontext für dich festlegen. Arithmetik setzt ihre Operanden in den numerischen Kontext, Verkettung setzt sie in den Stringkontext, und `if`, `while` und `and`/`or` setzen ihre Bedingung in den Booleschen Kontext:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

`if @array { … }` funktioniert also genau so, wie man es erhoffen würde: Ein nicht-leeres Array ist wahr. Die Präfixoperatoren sind die explizite Art, dieselben Umwandlungen anzufordern.

In Kombination mit einem nachgestellten `if` ermöglicht dies wirklich ausdrucksstarken Code:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
