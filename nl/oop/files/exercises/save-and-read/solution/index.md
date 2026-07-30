---
title: 'Oplossing: Opslaan en lezen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Je kunt de broncode vinden in het bestand [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Uitvoer

```
84
```

## Opmerkingen

1. `spurt` maakt het bestand aan en schrijft de string erin; `slurp` leest het hele bestand terug in een string. Samen vormen ze een volledige heen-en-weerreis van opslaan en inladen.

1. Wat er uit `slurp` terugkomt is tekst — `"42\n"` — dus we `trim`-en de afsluitende newline eraf en roepen `.Int` aan om er een getal van te maken voordat we rekenen. Het resultaat, `42 * 2`, is `84`.

1. Het programma werkt overigens ook zonder `.trim.Int`.

{% include nav.html %}
