---
title: 'Solution: Jede Fakultät auf einmal'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say [\*] 1..6;
```

🦋 Den Quellcode finden Sie in der Datei [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Ausgabe

```
(1 2 6 24 120 720)
```

## Kommentare

1. Der Backslash innerhalb der Klammern verwandelt `[*]` in eine *dreieckige* Reduktion. Anstatt die Liste auf einen einzelnen Wert zusammenzufassen, behält sie jedes Teilprodukt: `1`, dann `1*2`, dann `1*2*3`, und so weiter.

1. Jedes Teilprodukt `1*2*...*k` ist genau _k!_, sodass das Ergebnis die Liste der Fakultäten von `1` bis `6` ist. Ein einfaches `[*] 1..6` hätte nur das letzte davon ergeben, nämlich `720`.

{% include nav.html %}
