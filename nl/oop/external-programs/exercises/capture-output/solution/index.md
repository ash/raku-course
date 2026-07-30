---
title: 'Oplossing: Vang de uitvoer op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Je kunt de broncode vinden in het bestand [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Uitvoer

```
3
```

## Opmerkingen

1. `:out` leidt de uitvoer van het programma de `Proc` in plaats van naar het scherm, en `.out.slurp(:close)` leest alles terug; `.trim` haalt de afsluitende newline weg die `echo` toevoegt.

1. Zodra de uitvoer een gewone string in ons programma is, behandelen we haar als elke andere gegevenswaarde: `.words.elems` splitst haar op witruimte en telt de stukken, wat `3` oplevert. Daar draait opvangen om — het externe programma wordt een bouwsteen waarvan we het resultaat verder verwerken.

{% include nav.html %}
