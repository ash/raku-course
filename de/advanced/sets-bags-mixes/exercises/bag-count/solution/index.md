---
title: 'Solution: In einem Bag zählen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Du findest den Quellcode in der Datei [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Ausgabe

```
2
6
```

## Kommentare

1. `'the cat sat on the mat'.words` erzeugt die sechs Woerter, und `bag` zählt jedes davon. Die Abfrage mit `<the>` gibt zurück, wie oft `the` vorkam -- zweimal.

1. Die Methode `total` summiert alle Zaehler, was der Anzahl der in den Bag eingefuegten Woerter entspricht -- `6`.

{% include nav.html %}
