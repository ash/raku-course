---
title: 'Solution: Ein verschachtelter Name'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Du findest den Quellcode in der Datei [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Ausgabe

```
10
20
```

## Kommentare

1. Das Verschachteln eines Namensraums in einem anderen ergibt einen längeren `::`-Pfad. Sowohl die Variable als auch die Subroutine befinden sich zwei Ebenen tief in `Outer::Inner`.

1. Der vollständige Name `$Outer::Inner::base` erreicht die Variable, und `Outer::Inner::doubled()` erreicht die Subroutine über dieselben zwei Ebenen. Ein Subroutinenname hat kein Sigil, daher steht im Gegensatz zur Variable kein `$` davor.

1. Beide Mitglieder sind mit `our` deklariert, wodurch sie außerhalb ihres Moduls sichtbar werden. Eine `my`-Deklaration hätte sie privat in `Inner` gehalten.

{% include nav.html %}
