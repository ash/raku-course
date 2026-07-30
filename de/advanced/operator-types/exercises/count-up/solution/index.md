---
title: 'Solution: Hochzählen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Den Quellcode finden Sie in der Datei [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Ausgabe

```
9
10
```

## Kommentare

1. `++` ist ein Postfix-Operator: Er steht nach seinem Operanden. Als Ausdruck verwendet, liefert `$n++` zuerst den *alten* Wert `9` — den `say` ausgibt — und erhöht dann erst die Variable.

1. Die zweite Zeile zeigt, dass `$n` tatsächlich `10` geworden ist. (Die Präfix-Form `++$n` würde stattdessen zuerst inkrementieren und `10` zurückgeben.)

{% include nav.html %}
