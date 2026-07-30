---
title: 'Solution: Ein Symbol nachschlagen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Du findest beide Quelldateien im Verzeichnis [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Ausgabe

```console
$ raku -I. lookup.raku
3.14
```

## Kommentare

1. `Circle::` ist der Stash des Moduls, und die Verwendung eines Namens als Schlüssel — `Circle::{'$pi'}` — ruft den darunter gespeicherten Wert ab. Der Schlüssel muss das Sigil enthalten, genau wie die aufgelisteten Namen.

1. Dies erreicht denselben Wert wie das qualifizierte `$Circle::pi`, aber da der Name ein gewöhnlicher String ist, kann er zur Laufzeit berechnet werden, anstatt ihn im Quellcode auszuschreiben.

{% include nav.html %}
