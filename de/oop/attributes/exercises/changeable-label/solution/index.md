---
title: 'Lösung: Ein änderbares Etikett'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Du findest den Quellcode in der Datei [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Ausgabe

```
draft (revised)
```

## Kommentare

1. Der Trait `is rw` lässt den Accessor einen schreibbaren Container liefern, sodass er links von einer Zuweisung stehen kann.

1. Weil er schreibbar ist, funktioniert auch der zusammengesetzte Operator `~=` darauf: `$l.text ~= ' (revised)'` liest den aktuellen Text, hängt das Suffix an und speichert das Ergebnis wieder zurück — alles über denselben Accessor.

{% include nav.html %}
