---
title: 'Lösung: Zahlen herausziehen und summieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Du findest den Quellcode in der Datei [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Ausgabe

```
numbers: 12 3 25
sum: 40
```

## Kommentare

1. Übergibt man `.comb` das Regex `/\d+/`, liefert es jede Folge von Ziffern als eigene
Zeichenkette und übergeht die Wörter dazwischen.

1. `[+] @numbers` addiert sie und wandelt die Ziffernketten dabei in Zahlen um.

{% include nav.html %}
