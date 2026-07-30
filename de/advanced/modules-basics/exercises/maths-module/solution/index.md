---
title: 'Solution: Ein Mathematik-Modul'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe. Sie verwendet zwei Dateien.

## Code

Das Modul, `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Das Programm, `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Ausgabe

```console
$ raku -I. maths.raku
36
```

## Kommentare

1. Das Modul markiert `square` mit `is export`, wodurch es dem Programm zur Verfügung steht, das es verwendet.

1. Die Option `-I.` fügt das aktuelle Verzeichnis zum Modul-Suchpfad hinzu, sodass Raku `Maths.rakumod` neben dem Programm findet.

{% include nav.html %}
