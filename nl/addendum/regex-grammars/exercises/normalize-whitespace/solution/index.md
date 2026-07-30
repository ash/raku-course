---
title: 'Oplossing: Normaliseer witruimte'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Je kunt de broncode vinden in het bestand [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Uitvoer

```
too many spaces
```

## Opmerkingen

1. `.trim` haalt de voorafgaande en afsluitende spaties weg; de substitutie vervangt daarna
elke reeks witruimte `\s+` door één spatie.

1. Het bijwoord `:g` maakt de substitutie globaal, zodat *alle* gaten ingeklapt worden,
niet alleen het eerste.

{% include nav.html %}
