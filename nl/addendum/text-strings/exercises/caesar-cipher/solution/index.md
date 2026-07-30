---
title: 'Oplossing: Caesarcijfer'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Je kunt de broncode vinden in het bestand [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Uitvoer

```
KHOOR
```

## Opmerkingen

1. De transliteratieoperator `tr///` koppelt tekens uit de eerste verzameling aan de
tweede, positie voor positie. `A..Z` staat tegenover `D..ZA..C`, dus `A` wordt
`D`, `B` wordt `E`, en de staart `X Y Z` slaat terug om naar `A B C`.

1. `tr///` verandert de string ter plaatse, dus bevat `$text` zelf na de match het
versleutelde woord.

{% include nav.html %}
