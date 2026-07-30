---
title: Een opdrachtregelvlag
translations_gpt: true
---

{% include menu.html %}

## Opgave

Een `Bool` benoemde parameter van `MAIN` wordt een aan/uit-**vlag**: het schrijven van `--flag` stelt deze in op `True`, en het weglaten behoudt de standaardwaarde. Schrijf een programma waarvan de `MAIN` `Bool :$shout = False` aanneemt en `HELLO` afdrukt wanneer de vlag is ingesteld, of anders `hello`.

## Voorbeeld

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
