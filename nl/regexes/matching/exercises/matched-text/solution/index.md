---
title: 'Oplossing: De gematchte tekst'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Je kunt de broncode vinden in het bestand [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Uitvoer

```
base
```

## Opmerkingen

1. Elke smartmatch bewaart zijn resultaat in de bijzondere matchvariabele `$/`, dus is het niet nodig hem aan een eigen variabele toe te kennen.

1. Het matchobject bevat de gematchte tekst; `.Str` op `$/` aanroepen geeft die tekst als gewone string terug. Het matchobject rechtstreeks afdrukken zou in plaats daarvan `｢base｣` getoond hebben.

{% include nav.html %}
