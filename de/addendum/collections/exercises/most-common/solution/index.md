---
title: 'Lösung: Das häufigste Element'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Du findest den Quellcode in der Datei [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Ausgabe

```
a
```

## Kommentare

1. Nachdem jeder Wert in `%count` gezählt wurde, stellt das Sortieren der Paare nach
`-*.value` das häufigste voran; `[0].key` gibt dann jenes Element zurück.

1. Raku kann das Zählen für Sie übernehmen — mit einem [`Bag`](/de/advanced/sets-bags-mixes),
der zählt, wie oft jeder Wert vorkommt. Dann wählt `.max(*.value)` das Paar mit der
höchsten Anzahl, und `.key` ist das Element selbst:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Das ganze Zählen ist ein einziger Methodenaufruf, und es gibt keinen ausdrücklichen
    Hash zu verwalten.

{% include nav.html %}
