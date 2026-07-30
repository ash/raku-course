---
title: Objekte inspizieren
translations_gpt:
---

{% include menu.html %}

Im [Abschnitt über Container](/de/advanced/containers) haben Sie `.^name` verwendet, um einen Wert nach seinem Typ zu fragen. Dieselben Meta-Aufrufe mit `.^` erlauben es Ihnen, eine Klasse und ihre Objekte zu untersuchen: ihre Namen, ihre Attribute und ihren Platz in einer Hierarchie.

Die Metamethode `.^name` liefert den Namen der Klasse:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

Die Metamethode `.^attributes` führt die Attribute der Klasse auf. Jedes wird mit seinem Typ und seinem internen privaten Namen dargestellt (die `$!`-Form, die Sie bei den [privaten Attributen](/de/oop/methods/private-attributes) kennengelernt haben):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspektion ist nützlich für Werkzeuge, die allgemein mit Objekten arbeiten — etwa um jedes Attribut eines Objekts auszugeben, ohne dessen Klasse vorher zu kennen. Das nächste Thema zeigt, wie man die Vererbungskette einer Klasse sieht.

{% include nav.html %}
