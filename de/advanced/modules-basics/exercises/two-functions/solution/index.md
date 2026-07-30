---
title: 'Solution: Zwei Funktionen in einem Modul'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe. Sie verwendet zwei Dateien.

## Code

Das Modul, `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

Das Programm, `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Ausgabe

```console
$ raku -I. calc.raku
7
12
```

## Kommentare

1. Ein Modul kann beliebig viele Subroutinen exportieren; jede trägt ihren eigenen `is export`-Trait.

1. Sowohl `add` als auch `mul` werden im Programm nach einem einzigen `use Calc` verfügbar.

{% include nav.html %}
