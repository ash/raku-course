---
title: 'Solution: Die Symbole auflisten'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Du findest beide Quelldateien im Verzeichnis [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Ausgabe

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Kommentare

1. `Circle::` ist das Package des Moduls, und `.keys` listet die darin enthaltenen Namen auf, jeweils einschließlich des Sigils.

1. `.elems` zählt diese Namen — das Modul definiert zwei `our`-Variablen, daher ist die Anzahl `2`.

1. `.keys` garantiert keine bestimmte Reihenfolge, daher wenden wir `.sort` an, um ein stabiles, alphabetisches Ergebnis `($pi $tau)` zu erhalten. Ohne Sortierung könnten die beiden Namen zwischen verschiedenen Ausführungen in beliebiger Reihenfolge erscheinen.

{% include nav.html %}
