---
title: 'Oplossing: Een letter of cijfer'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Je kunt de broncode vinden in het bestand [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Uitvoer

```
｢x｣
```

## Opmerkingen

1. Een klasse kan meerdere bereiken bevatten, het een na het ander. `<[a..z 0..9]>` matcht één teken dat een kleine letter **of** een cijfer is. De spatie tussen de twee bereiken staat er alleen voor de leesbaarheid — `<[a..z0..9]>` betekent precies hetzelfde, omdat spaties binnen `<[…]>` genegeerd worden, net als elders in een regex.

1. Van links doorlopen zitten de twee spaties en de `@` niet in de klasse en worden ze overgeslagen; het eerste matchende teken is `x`. (Deze gecombineerde klasse ligt dicht bij waar de afkorting `\w` voor staat.)

{% include nav.html %}
