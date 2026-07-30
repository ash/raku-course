---
title: 'Oplossing: Een vermenigvuldiger'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Je kunt de broncode vinden in het bestand [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Uitvoer

```
12
```

## Opmerkingen

1. Het teruggegeven pointy block sluit om `$factor` heen en onthoudt dat die `3` is.

1. Het met `4` aanroepen geeft `12`.

{% include nav.html %}
