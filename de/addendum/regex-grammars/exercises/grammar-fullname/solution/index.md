---
title: 'Lösung: Eine Grammatik für vollständige Namen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Du findest den Quellcode in der Datei [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Ausgabe

```
Grace
Hopper
```

## Kommentare

1. Beim Token `TOP` beginnt das Zerlegen; es bezieht sich mit `<first>` und `<last>` über
den Namen auf die anderen Token, die damit zu Schlüsseln auf dem Treffer werden.

1. `$match<first>` ist ein Matchobjekt; das vorangestellte `~` verwandelt es in den
schlichten getroffenen Text.

{% include nav.html %}
