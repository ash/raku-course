---
title: 'Oplossing: Herformatteer een datum'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Je kunt de broncode vinden in het bestand [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Uitvoer

```
15/06/2025
```

## Opmerkingen

1. Het patroon captureert het jaar in `$0`, de maand in `$1` en de dag in `$2`.

1. De vervanging schrijft ze in de nieuwe volgorde `$2/$1/$0`, met de schuine strepen ge-escapet als `\/`. De vervangingskant heeft geen omringende spaties, omdat spaties daar letterlijk ingevoegd zouden worden.

{% include nav.html %}
