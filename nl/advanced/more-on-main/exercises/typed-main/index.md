---
title: Een getypte MAIN
translations_gpt: true
---

{% include menu.html %}

## Opgave

Een typebeperking op een `MAIN`-parameter wordt ook gecontroleerd voordat de body wordt uitgevoerd. Schrijf een programma waarvan de `MAIN` een enkele `Int $n` aanneemt en `$n` verdubbeld afdrukt. Als het argument geen geldig geheel getal is, komt de signatuur niet overeen en drukt Raku in plaats daarvan het gebruiksbericht af — je krijgt de validatie gratis.

## Voorbeeld

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
