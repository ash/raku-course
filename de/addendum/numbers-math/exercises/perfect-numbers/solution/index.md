---
title: 'Lösung: Vollkommene Zahlen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Du findest den Quellcode in der Datei [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Ausgabe

```
[6 28]
```

## Kommentare

1. `(1..^$n).grep($n %% *)` behält die Zahlen unterhalb von `$n`, die es ohne Rest teilen
— seine echten Teiler. Das `%% *` ist eine Whatever-Funktion, welche die Teilbarkeit
prüft.

1. `[+]` summiert diese Teiler, und das äußere `grep` behält nur die Zahlen, die dieser
Summe gleichen.

{% include nav.html %}
