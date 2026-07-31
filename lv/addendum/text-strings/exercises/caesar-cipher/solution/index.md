---
title: 'Risinājums: Cēzara šifrs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Atrodiet programmu failā [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Izvade

```
KHOOR
```

## Komentāri

1. Transliterācijas operators `tr///` rakstzīmes no pirmās kopas attēlo otrajā
pozīciju pa pozīcijai. `A..Z` nostājas pretī `D..ZA..C`, tāpēc `A` kļūst par
`D`, `B` kļūst par `E`, un aste `X Y Z` aptinas atpakaļ uz `A B C`.

1. `tr///` maina virkni uz vietas, tāpēc pēc atbilstības pats `$text` satur
šifrēto vārdu.

{% include nav.html %}
