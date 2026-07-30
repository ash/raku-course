---
title: Oefening ’Noem de fout‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Schrijf een subroutine `risky` die `die 'sub failed'` doet. Roep haar daarna aan vanuit een blok met een `CATCH`-faser. De `CATCH` moet de typenaam van de exceptie afdrukken (met `.^name`) en daarna haar melding (met `.message`). Dit laat zien dat `CATCH` excepties afhandelt die geworpen worden door code die het blok *aanroept*, niet alleen door een `die` die rechtstreeks in het blok staat.

## Voorbeeld

Het programma drukt af:

```
X::AdHoc
sub failed
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
