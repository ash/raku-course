---
title: 'Lösung: Vokale zählen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Du findest den Quellcode in der Datei [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Ausgabe

```
6
```

## Kommentare

1. Übergibt man `.comb` ein Regex, liefert es jedes treffende Zeichen. Die Zeichenklasse
`<[aeiouAEIOU]>` führt die Vokale in beiden Schreibungen auf.

1. Das vorangestellte `+` versetzt die entstandene Liste in numerischen Kontext und gibt
ihre Länge — die Anzahl der Vokale.

{% include nav.html %}
