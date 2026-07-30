---
title: 'Lösung: Leerraum vereinheitlichen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Du findest den Quellcode in der Datei [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Ausgabe

```
too many spaces
```

## Kommentare

1. `.trim` entfernt die führenden und abschließenden Leerzeichen; die Ersetzung tauscht
dann jede Folge von Leerraum `\s+` gegen ein Leerzeichen.

1. Das Adverb `:g` macht die Ersetzung global, *alle* Lücken werden also zusammengezogen,
nicht nur die erste.

{% include nav.html %}
