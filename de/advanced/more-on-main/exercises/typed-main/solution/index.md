---
title: 'Solution: Ein typisiertes MAIN'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Den Quellcode finden Sie in der Datei [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Ausgabe

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Kommentare

1. Die `Int`-Beschraenkung bedeutet, dass das Kommandozeilenwort wie eine Ganzzahl aussehen muss. Bei `5` wird es an `$n` gebunden, und der Körper gibt `10` aus.

1. Bei `abc` kann der Wert nicht zu einem `Int` werden, sodass die Signatur nicht passt. Raku führt den Körper nicht aus — stattdessen gibt es die generierte Verwendungsmeldung aus, was Ihnen die Argumentvalidierung ohne manuelle Prüfungen ermöglicht.

{% include nav.html %}
