---
title: Oefening ’Noteer een waarschuwing‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Een programma verwerkt een waarde die negatief blijkt te zijn. Gebruik `note` om een waarschuwing naar de standaardfout te sturen wanneer de waarde onder nul ligt, en `say` om het echte resultaat — de absolute waarde — naar de standaarduitvoer te sturen. Gebruik de waarde `-3`.

## Voorbeeld

Beide regels verschijnen op het scherm:

```
Warning: the value is negative
3
```

Als de standaardfout weggegooid wordt, blijft alleen het resultaat over:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
