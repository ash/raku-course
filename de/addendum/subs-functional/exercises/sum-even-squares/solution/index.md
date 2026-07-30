---
title: 'Lösung: Summe der geraden Quadrate'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Du findest den Quellcode in der Datei [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Ausgabe

```
220
```

## Kommentare

1. Die Kette liest sich von links nach rechts: `.grep(* %% 2)` behält die geraden Zahlen,
`.map(* ** 2)` quadriert jede, und `[+]` reduziert die Quadrate zu ihrer Summe.

1. Die geraden Zahlen `2 4 6 8 10` ergeben quadriert `4 16 36 64 100`, was sich zu `220`
addiert.

1. Dieselben Schritte lassen sich als [Feed-Pipeline](/de/paradigms/feeds/feed-operator)
schreiben, in der `==>` jedes Ergebnis an die nächste Stufe weiterreicht — der Fluss liest
sich dann von oben nach unten statt als Methodenkette:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Jedes `==>` speist seine linke Liste in die nächste Routine, und das abschließende
    `==> say()` gibt die Summe aus, `220`.

{% include nav.html %}
