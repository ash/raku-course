---
title: 'Solution: Levensfase op basis van leeftijd'
translations_gpt: true
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Je kunt de broncode vinden in het bestand [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Uitvoer

```
adult
```

## Opmerkingen

1. Deze oplossing combineert twee soorten `when`. De eerste is een *voorwaarde*, `$_ < 0` (waarbij `$_` het topic is dat door `given` is ingesteld), die ongeldige leeftijden uitfiltert; de rest zijn *bereiken* die de geldige leeftijden in fasen groeperen.

1. Volgorde is belangrijk. De controle op negatieve leeftijd komt eerst, zodat deze wordt uitgevoerd voordat een bereik wordt getest. De waarde `30` valt in `20..64`, dus het programma drukt `adult` af.

1. Het `default`-blok dekt elke leeftijd van 65 en ouder, die niet door een van de genoemde bereiken wordt opgevangen.

Je zou dit ook kunnen omdraaien en `default` de *ongeldige* invoer laten opvangen. Noem elke erkende fase — inclusief `senior` als de voorwaarde `$_ >= 65` — en behandel al het overige (zoals een negatieve leeftijd) als ongeldig:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Hier is `default` een echte "geen van bovenstaande"-tak. Welke versie beter leesbaar is, is een kwestie van smaak: zet de controle vooraan wanneer het ongeldige geval de uitzondering is, of maak het de terugvaloptie wanneer de geldige fasen allemaal duidelijk zijn opgesomd.

{% include nav.html %}
