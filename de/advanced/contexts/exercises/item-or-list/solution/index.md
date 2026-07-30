---
title: 'Solution: Item oder Liste'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Du findest den Quellcode in der Datei [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Ausgabe

```
3
```

## Kommentare

1. `my $x = $(@a)` erzwingt den Elementkontext, sodass das gesamte Array in den einzelnen Skalar `$x` gepackt wird, statt ausgebreitet zu werden.

1. `@($x)` erzwingt dann den Listenkontext und breitet `$x` zurück in seine drei Elemente aus. Die `for`-Schleife läuft daher dreimal und hinterlässt den Zähler bei `3`. Die beiden Kontextualisierer sind genaue Gegensätze: `$( )` packt eine Liste in ein Element, `@( )` entpackt sie wieder.

{% include nav.html %}
