---
title: 'Lösung: Zwei Warenbestände zusammenführen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Du findest den Quellcode in der Datei [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Ausgabe

```
apples: 7, pears: 2, plums: 5
```

## Kommentare

1. Über beide Hashes zu laufen und `%total{$_} += ...` zu tun addiert jede Menge in die
laufende Summe, gleich ob der Schlüssel schon gesehen wurde — ein fehlender Schlüssel
beginnt bei null.

1. `%total.sort` ordnet die Paare nach Schlüssel, und das `.map` formt jedes als
`schlüssel: wert`, bevor sie verbunden werden.

{% include nav.html %}
