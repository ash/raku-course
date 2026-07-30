---
title: 'Solution: Ein Shout-Modul'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe. Sie verwendet zwei Dateien.

## Code

Das Modul, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Das Programm, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Ausgabe

```console
$ raku -I. shout.raku
HI
```

## Kommentare

1. Der Trait `is export` macht `shout` für jedes Programm sichtbar, das das Modul verwendet.

1. Die Methode `.uc` gibt die Großbuchstaben-Version der Zeichenkette zurück.

{% include nav.html %}
