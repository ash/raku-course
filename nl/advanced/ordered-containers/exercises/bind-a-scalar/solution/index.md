---
title: 'Solution: Een scalar binden'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Je kunt de broncode vinden in het bestand [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Uitvoer

```
9
1
```

## Opmerkingen

1. Binding met `:=` maakt `$bound` een andere naam voor dezelfde container als `$source`, in plaats van een kopie. Het wijzigen van `$source` is dus zichtbaar via `$bound`, die `9` print.

1. Gewone toekenning met `=` kopieert de waarde naar een aparte container, dus `$copy` wordt niet beïnvloed door de latere wijziging en print nog steeds `1`.

1. De twee naast elkaar zien is het hele punt: `:=` deelt een container, `=` dupliceert de waarde.

{% include nav.html %}
