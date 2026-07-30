---
title: Standaardstromen
translations_gpt:
---

{% include menu.html %}

Elk programma heeft drie _standaardstromen_ die het met zijn omgeving verbinden: standaarduitvoer, standaardfout en standaardinvoer. Raku stelt ze beschikbaar via drie bijzondere variabelen: `$*OUT`, `$*ERR` en `$*IN`.

Je hebt de hele tijd al naar de standaarduitvoer geschreven: `say` en `print` sturen hun tekst naar `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

Diagnostische meldingen en foutmeldingen worden apart gehouden, op de standaardfout, zodat ze niet door de echte uitvoer van het programma gemengd raken. De routine `note` schrijft daarheen:

```raku
note 'Something looks wrong'; # goes to standard error
```

Deze scheiding is nuttig omdat de twee stromen onafhankelijk omgeleid kunnen worden — je kunt bijvoorbeeld de uitvoer van een programma naar een bestand opslaan en toch de foutmeldingen op het scherm zien.

Je kunt ook rechtstreeks naar de stromen schrijven. Zowel `$*OUT` als `$*ERR` is een _handle_ met eigen methoden `say` en `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

De derde stroom, `$*IN`, is de standaardinvoer. Je kwam hem indirect tegen via `prompt`, dat er een regel uit leest. We komen op invoer lezen terug wanneer we naar [bestandshandles](/nl/oop/file-handles) kijken, want `$*IN` is net zo goed een handle als een geopend bestand.

{% include nav.html %}
