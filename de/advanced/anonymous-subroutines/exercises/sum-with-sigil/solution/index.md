---
title: 'Solution: Summe mit dem `&`-Sigil'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Den Quellcode finden Sie in der Datei [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Ausgabe

```
5
```

## Kommentare

1. Der Pointy Block listet zwei Parameter auf, `-> $a, $b`, sodass die anonyme Subroutine zwei Argumente entgegennimmt.

1. Da die Variable mit dem `&`-Sigil deklariert ist, kann sie als `add(2, 3)` aufgerufen werden, genau wie eine benannte Subroutine — ohne Sigil an der Aufrufstelle — und ergibt `5`.

{% include nav.html %}
