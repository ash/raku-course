---
title: Oefening ’Match het type‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Ingebouwde fouten hebben hun eigen exceptietypen, waarop je kunt matchen. Schrijf een blok dat `1 / 0` berekent en het resultaat probeert te gebruiken, wat een `X::Numeric::DivideByZero` werpt. Gebruik in de `CATCH`-faser van het blok `when X::Numeric::DivideByZero` om dat specifieke type te matchen, en druk `cannot divide by zero` af.

## Voorbeeld

Het programma drukt af:

```
cannot divide by zero
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
