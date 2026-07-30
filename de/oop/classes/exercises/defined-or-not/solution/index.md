---
title: 'Lösung: Definiert oder nicht'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Du findest den Quellcode in der Datei [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Ausgabe

```
False
False
True
True
```

## Kommentare

1. Die Schleife läuft über eine Mischung aus Typobjekten (`Cat`, `Dog`) und Instanzen (`Cat.new`, `Dog.new`).

1. Beide Typobjekte sind undefiniert, daher liefert `defined` für sie `False`; beide Instanzen sind definiert, daher liefert es `True`. Die Definiertheit hängt davon ab, ob ein Wert ein Typobjekt oder eine echte Instanz ist — nicht davon, zu welcher Klasse er gehört.

{% include nav.html %}
