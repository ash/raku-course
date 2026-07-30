---
title: 'Lösung: Sammeln mit einer Bedingung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Du findest den Quellcode in der Datei [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Ausgabe

```
[e u a i o]
```

## Kommentare

1. `.comb` zerlegt das Wort in einzelne Zeichen, die die Schleife der Reihe nach durchgeht.

1. `take` behält ein Zeichen nur, wenn es auf die Vokalklasse trifft, was die Vokale in ihrer Reihenfolge des Auftretens ergibt.

{% include nav.html %}
