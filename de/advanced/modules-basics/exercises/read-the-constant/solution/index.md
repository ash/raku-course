---
title: 'Solution: Die Konstante lesen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Ausgabe

```console
$ raku -I. read-pi.raku
3.14
```

## Kommentare

1. `need Circle` lädt das Modul, importiert aber keine Namen, sodass ein einfaches `$pi` nicht erkannt würde.

1. Die `our`-Variable wird über den Modulnamen erreicht, geschrieben als `$Circle::pi`.

{% include nav.html %}
