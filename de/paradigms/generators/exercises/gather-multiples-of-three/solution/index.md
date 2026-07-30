---
title: 'Lösung: Sammeln Sie die Vielfachen von drei'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Du findest den Quellcode in der Datei [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Ausgabe

```
[3 6 9 12 15]
```

## Kommentare

1. Die Schleife geht jede Zahl durch, aber `take` läuft nur, wenn `$_ %% 3` wahr ist.

1. In der Liste werden also nur die Vielfachen von drei gesammelt.

{% include nav.html %}
