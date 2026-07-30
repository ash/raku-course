---
title: 'Lösung: Beschreiben Sie eine Klasse'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Du findest den Quellcode in der Datei [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Ausgabe

```
Dog
4
False
```

## Kommentare

1. `.^name` liefert den eigenen Namen der Klasse, `Dog`.

1. `.^mro` liefert die Vererbungskette, und `.elems` zählt sie. In der Kette stehen vier Typen — `Dog`, sein Elternteil `Animal` sowie die universellen `Any` und `Mu` —, die Anzahl ist also `4`.

1. `.^mro.map(*.^name)` verwandelt diese Kette in die Liste der Typnamen, `(Dog Animal Any Mu)`. Der Mengenoperator `∈` prüft dann, ob `Cat` darunter ist. `Dog` stammt von keiner `Cat` ab, die Antwort ist also `False`.

{% include nav.html %}
