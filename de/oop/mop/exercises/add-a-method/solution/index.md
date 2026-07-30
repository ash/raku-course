---
title: 'Lösung: Fügen Sie eine Methode hinzu'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Du findest den Quellcode in der Datei [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Ausgabe

```
Rex says woof
```

## Kommentare

1. `.^add_method` hängt dem Metaobjekt der Klasse zur Laufzeit eine neue Methode an, angegeben als anonyme `method { … }`.

1. Die hinzugefügte Methode ist eine echte Methode der Klasse, innerhalb von ihr erreicht `$.name` also das Attribut `name` des Objekts, genau wie es eine im Klassenrumpf geschriebene Methode täte. Nach dem Aufruf antwortet jedes `Dog` auf `.speak`.

{% include nav.html %}
