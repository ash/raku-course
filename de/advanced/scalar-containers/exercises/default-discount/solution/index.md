---
title: 'Solution: Standardrabatt'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Du findest den Quellcode in der Datei [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Natürlich wäre eine einfachere Lösung, die Variable direkt mit `0` zu initialisieren:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Ausgabe

```
0
15
```

## Kommentare

1. Der Trait `is default(0)` gibt dem Container einen Wert, auf den er zurückfallen kann, solange ihm noch nichts zugewiesen wurde. Das Lesen der Variable gibt `0` zurück, und anders als bei einem nicht deklarierten Standard wird keine Warnung über einen _uninitialisierten Wert_ erzeugt.

1. Nach der Zuweisung enthält der Container `15`, und der Standardwert spielt keine Rolle mehr.

{% include nav.html %}
