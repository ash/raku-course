---
title: 'Lösung: Quersumme'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Du findest den Quellcode in der Datei [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Ausgabe

```
10
```

## Kommentare

1. Der Grundfall ist eine einstellige Zahl, die ihre eigene Quersumme ist.

1. Andernfalls ist `$n % 10` die letzte Ziffer und `$n div 10` lässt sie fallen; `1 + 2 + 3 + 4` ist `10`.

{% include nav.html %}
