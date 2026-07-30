---
title: 'Solution: Ein Doppelpunkt-map'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Den Quellcode findest du in der Datei [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Ausgabe

```
(12 14 16 18 20)
```

## Kommentare

1. Nur `grep`, der letzte Aufruf in der Kette, kann die Doppelpunkt-Form verwenden. Der Doppelpunkt macht `* > 10` zu seinem Argument, genau wie es `grep(* > 10)` tun würde. Da wir die Ergebnisse trotzdem ausgeben müssen, wird `say` nun als Funktion verwendet, nicht als Methode.

1. Der `map`-Aufruf muss seine Klammern behalten. Würde man stattdessen `.map: * * 2` schreiben, würde der Doppelpunkt `.grep(* > 10)` als Teil der Argumente von `map` verschlucken, und die Kette würde brechen.

{% include nav.html %}
