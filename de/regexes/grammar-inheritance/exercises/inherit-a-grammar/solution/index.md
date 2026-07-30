---
title: 'Lösung: Erben Sie eine Grammatik'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Du findest den Quellcode in der Datei [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Ausgabe

```
True
True
False
```

## Kommentare

1. Sowohl `Dog is Animal` als auch `Cat is Animal` erbt das Token `TOP` unverändert von der Basis; jede liefert nur ihr eigenes `sound`.

1. So wird eine Basisgrammatik auf zwei verschiedene Weisen erweitert. `Dog` trifft nur `woof` und `Cat` nur `meow` — weshalb `Dog.parse('meow')` scheitert: Ein Hund behält sein eigenes überschriebenes `sound`, genau wie sich überschriebene Methoden auf Objekten verhalten.

{% include nav.html %}
