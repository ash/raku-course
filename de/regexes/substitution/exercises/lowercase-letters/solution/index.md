---
title: 'Lösung: Kleinbuchstaben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Du findest den Quellcode in der Datei [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Ausgabe

```
raku
```

## Kommentare

1. `tr///` ordnet jedem Zeichen des ersten Bereichs das Zeichen an derselben Stelle des zweiten zu.

1. Hier laufen die Bereiche von den Großbuchstaben zu den Kleinbuchstaben, jeder Großbuchstabe wird also durch seinen kleinen Partner ersetzt — die Gegenrichtung zum Großschreiben.

{% include nav.html %}
