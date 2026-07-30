---
title: 'Solution: Eine URL bauen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Den Quellcode finden Sie in der Datei [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Ausgabe

```
http://example.com
18
```

## Kommentare

1. Das Array ist mit der Winkelklammer-Notation `<...>` geschrieben, was gleichbedeutend mit `'http', '://', 'example', '.com'` ist.

1. Der Reduktions-Meta-Operator `[~]` setzt den Zeichenkettenverkettungsoperator `~` zwischen alle Elemente, sodass `[~] @parts` die vier Teile zur einzelnen Zeichenkette `http://example.com` zusammenfügt.

1. Das Speichern des Ergebnisses in `$url` ermöglicht die Wiederverwendung: `$url.chars` gibt dann an, dass die zusammengesetzte URL `18` Zeichen lang ist.

{% include nav.html %}
