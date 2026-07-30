---
title: 'Lösung: Sammeln Sie die Kubikzahlen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Du findest den Quellcode in der Datei [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Ausgabe

```
[1 8 27 64]
```

## Kommentare

1. Das `take` läuft einmal für jede Zahl und steuert ihre Kubikzahl bei (`$_ ** 3`).

1. Der `gather`-Block ergibt die Liste aller genommenen Werte.

{% include nav.html %}
