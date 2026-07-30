---
title: Oefening ’Een negatieve fout‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Definieer een eigen exceptieklasse `Negative` die van `Exception` erft, een attribuut `n` heeft en waarvan de methode `message` `<n> is negative` teruggeeft.

Schrijf een subroutine `check($n)` die een `Negative` werpt (met die `n` erin) wanneer haar argument onder nul ligt, en anders het argument teruggeeft. Roep daarna, in een blok, `check(-5)` aan en gebruik een `CATCH`-faser met `when Negative` om de melding van de exceptie af te drukken.

Werp ten slotte, na het blok, nog een `Negative` (met `n` gelijk aan `-10`) om te laten zien dat een exceptie die geworpen wordt waar geen `CATCH` haar bewaakt het programma beëindigt.

## Voorbeeld

Het programma drukt af:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
