---
title: 'Lösung: Quersumme durch Rekursion'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Du findest den Quellcode in der Datei [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Ausgabe

```
15
```

## Kommentare

1. Der Grundfall ist eine einstellige Zahl, die ihre eigene Quersumme ist. Sonst schält
die Routine mit `$n % 10` die letzte Ziffer ab und ruft sich auf dem Rest, `$n div 10`,
selbst auf.

{% include nav.html %}
