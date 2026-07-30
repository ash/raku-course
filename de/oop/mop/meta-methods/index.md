---
title: Metamethoden
translations_gpt:
---

{% include menu.html %}

Eine _Metamethode_ wird mit `.^` statt mit `.` aufgerufen. Das gewöhnliche `.method` führt eine Methode des Objekts aus; das `.^method` ruft eine Methode auf dem **Metaobjekt** des Objekts auf — es fragt also nach dem Typ, statt als der Typ zu handeln.

Sie kennen bereits `.^name`, das den Namen des Typs liefert:

```raku
say 42.^name; # Int
```

Andere Metamethoden untersuchen den Aufbau eines Typs. `.^attributes` führt seine Attribute auf, und `.^find_method` sagt Ihnen, ob eine Methode existiert:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` liefert die _method resolution order_ — die Kette der Typen, die Raku der Reihe nach durchsucht, wenn es eine Methode nachschlägt. Sie ist die Vererbungslinie einer Klasse:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` erbt von `A`, und jeder Typ letztlich von `Any` und `Mu`, ein Methodenaufruf auf einem `B` wird also genau entlang dieses Pfads gesucht. Diese Metamethoden machen den Aufbau Ihrer Typen zu Daten, die Sie zur Laufzeit abfragen können.

{% include nav.html %}
