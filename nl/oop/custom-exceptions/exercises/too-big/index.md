---
title: Oefening ’Te groot‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Definieer een eigen exceptieklasse `TooBig` die van `Exception` erft en twee attributen heeft, `value` en `limit`. Haar methode `message` moet `Value <value> exceeds the limit of <limit>` teruggeven.

Loop daarna over de waarden `30`, `99` en `60` met een limiet van `50`. Werp voor elke waarde alleen een `TooBig` wanneer de waarde de limiet overschrijdt, en gebruik een `CATCH`-faser met `when TooBig` die de melding afdrukt **en**, op een tweede regel, het attribuut `limit` van de exceptie rechtstreeks uitleest om `Try a value up to <limit>.` af te drukken. Een waarde binnen de limiet moet eenvoudigweg melden dat ze in orde is.

Dit laat zien dat de exceptie alleen voor de mislukkende getallen opgeworpen wordt; de andere gaan er zo doorheen, en de lus loopt hoe dan ook door.

## Voorbeeld

Het programma drukt af:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
