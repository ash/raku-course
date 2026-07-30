---
title: 'Lösung: Quersummenwurzel'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Du findest den Quellcode in der Datei [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Ausgabe

```
3
```

## Kommentare

1. `$n.comb` zerlegt die Zahl in ihre einzelnen Ziffernzeichen; `[+]` addiert sie und
verwandelt die Zeichenketten dabei von selbst in Zahlen.

1. Die Schleife wiederholt sich, solange das Ergebnis noch mehr als eine Ziffer hat, sie
hält also an, sobald `$n` unter `10` fällt.

{% include nav.html %}
