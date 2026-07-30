---
title: Oefening ’Een schrijfbare parameter‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Standaard zijn de parameters van een subroutine alleen-lezen, dus een routine kan de variabele van de aanroeper niet wijzigen. De trait `is rw` heft die beperking op.

Schrijf een subroutine `double` waarvan de enige parameter met `is rw` gemarkeerd is en die hem ter plaatse verdubbelt (`$n *= 2`). Roep hem aan op een variabele met de waarde `21` en druk daarna de variabele af om te laten zien dat die `42` geworden is.

## Voorbeeld

Het programma drukt af:

```
42
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
