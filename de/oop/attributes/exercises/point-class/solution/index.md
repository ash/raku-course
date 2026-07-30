---
title: 'Lösung: Eine Punktklasse'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Du findest den Quellcode in der Datei [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Ausgabe

```
5
```

## Kommentare

1. Die beiden Deklarationen `has $.x` und `has $.y` erzeugen die Attribute samt ihren Lese-Accessoren.

1. Jedes Objekt speichert sein eigenes `x` und `y`, daher melden `$a` und `$b` verschiedene Koordinaten, obwohl sie von derselben Art sind. Diese Unabhängigkeit ist der ganze Sinn von Attributen — jede Instanz trägt ihre eigenen Daten.

{% include nav.html %}
