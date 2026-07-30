---
title: Een symbool opzoeken
translations_gpt:
---

{% include menu.html %}

## Opgave

Naast het weergeven van de namen van een pakket, kun je een naam dynamisch opzoeken door het als sleutel te gebruiken in de stash van het pakket. Je hebt een module `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Schrijf een apart programma dat de module laadt en de waarde van `$pi` afdrukt door het op te zoeken in de stash met `Circle::{'$pi'}` — niet met de gekwalificeerde `$Circle::pi`.

## Voorbeeld

Wanneer het programma wordt uitgevoerd met de module op het zoekpad, drukt het af:

```console
$ raku -I. lookup.raku
3.14
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
