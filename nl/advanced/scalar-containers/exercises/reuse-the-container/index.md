---
title: Getypt of ongetypt
translations_gpt:
---

{% include menu.html %}

## Probleem

Declareer twee scalaire variabelen naast elkaar: een variabele zonder type `$untyped` en een variabele met `Int`-type `$typed`. Dump beide met `dd` terwijl ze nog leeg zijn, wijs vervolgens `42` toe aan elk en dump ze opnieuw. Let goed op hoe `dd` de twee containers verschillend beschrijft.

## Voorbeeld

Het programma drukt af (naar standaardfoutuitvoer):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
