---
title: 'Lösung: Collatz-Schritte'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Du findest den Quellcode in der Datei [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Ausgabe

```
111
```

## Kommentare

1. Der ternäre Operator `?? !!` wählt den nächsten Wert in einem einzigen Ausdruck: `$n`
halbieren, wenn es gerade ist (`$n %% 2`), sonst `3 * $n + 1` anwenden.

1. `27` ist ein berühmter kleiner Fall, der einen erstaunlich langen Umweg nimmt — `111`
Schritte —, bevor er sich schließlich bei `1` beruhigt.

{% include nav.html %}
