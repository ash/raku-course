---
title: 'Lösung: Römische Zahlen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @table =
    1000 => 'M', 900 => 'CM', 500 => 'D', 400 => 'CD',
    100  => 'C', 90  => 'XC', 50  => 'L', 40  => 'XL',
    10   => 'X', 9   => 'IX', 5   => 'V', 4   => 'IV',
    1    => 'I';

my $n = 1994;
my $roman = '';

for @table -> $pair {
    while $n >= $pair.key {
        $roman ~= $pair.value;
        $n -= $pair.key;
    }
}

say $roman;
```

🦋 Du findest den Quellcode in der Datei [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Ausgabe

```
MCMXCIV
```

## Kommentare

1. Die Tabelle führt jedes Zeichen nach absteigendem Wert auf, einschließlich der
subtraktiven Formen wie `CM` (900) und `IV` (4), der Algorithmus muss sie also nie
gesondert behandeln.

1. Für jeden Eintrag hängt das `while` das Zeichen an und zieht seinen Wert so oft ab, wie
er hineinpasst, die größten Stücke werden also zuerst aufgebraucht.

{% include nav.html %}
