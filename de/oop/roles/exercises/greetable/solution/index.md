---
title: 'Lösung: Eine Schachtel mit Größe'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 Du findest den Quellcode in der Datei [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Ausgabe

```
size is 10
True
```

## Kommentare

1. Die Rolle liefert die Methode `describe`, und die Klasse bindet sie mit `does Sized` ein. Die Methode stützt sich auf `self.size`, das die Klasse `Box` beisteuert — Rolle und Klasse fügen sich zum vollständigen Objekt zusammen.

1. Weil `Box` die Rolle erfüllt, ist der Smartmatch `$b ~~ Sized` `True`: Ein Objekt wird als Träger jeder Rolle erkannt, die seine Klasse einbindet, was nützlich ist, um vor dem Aufruf einer Rollenmethode zu prüfen, was ein Objekt kann.

{% include nav.html %}
