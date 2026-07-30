---
title: 'Oplossing: Kleine letters'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Je kunt de broncode vinden in het bestand [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Uitvoer

```
raku
```

## Opmerkingen

1. `tr///` koppelt elk teken in het eerste bereik aan het teken op dezelfde positie in het tweede.

1. Hier lopen de bereiken van de hoofdletters naar de kleine letters, dus wordt elke hoofdletter vervangen door haar kleine partner — de omgekeerde richting van naar hoofdletters omzetten.

{% include nav.html %}
