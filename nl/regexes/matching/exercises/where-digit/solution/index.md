---
title: 'Oplossing: Waar staat het cijfer'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Je kunt de broncode vinden in het bestand [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Uitvoer

```
3
4
```

## Opmerkingen

1. De klasse `\d` matcht één cijfer. De engine stopt bij het **eerste** dat ze vindt — `9`, op index `3` (posities tellen vanaf nul); de latere `2` wordt nooit bereikt.

1. `.from` geeft het begin van de match, `3`, en `.to` geeft de positie net na het einde, `4`. Het verschil `.to - .from` is de lengte van de match — hier één teken.

{% include nav.html %}
