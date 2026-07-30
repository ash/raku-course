---
title: 'Lösung: Worthäufigkeit'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Du findest den Quellcode in der Datei [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Ausgabe

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Kommentare

1. `$text.words` liefert die Wörter; `%freq{$_}++` erhöht für jedes einen Zähler und legt
den Schlüssel beim ersten Auftreten an.

1. Das Sortieren nach `-.value` stellt die häufigsten voran; `.key` als zweites
Sortierfeld löst Gleichstände alphabetisch auf, die Reihenfolge ist damit vollständig
bestimmt.

{% include nav.html %}
