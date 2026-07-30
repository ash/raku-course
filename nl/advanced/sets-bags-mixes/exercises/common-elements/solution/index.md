---
title: 'Solution: Gemeenschappelijke elementen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Je kunt de broncode vinden in het bestand [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Uitvoer

```
2
False
```

## Opmerkingen

1. De doorsnede `$a ∩ $b` is zelf een set — hier `{banana, cherry}` — dus deze bevat `2` elementen. Als je liever ASCII gebruikt, schrijf dan `(&)` in plaats van `∩`.

1. Omdat de doorsnede een set is, kun je de lidmaatschapsvraag stellen met `∈`. `apple` zit alleen in de eerste set, dus het zit niet in de doorsnede, en de test geeft `False` terug.

{% include nav.html %}
