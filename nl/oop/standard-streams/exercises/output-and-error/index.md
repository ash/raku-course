---
title: Oefening ’Uitvoer en fout‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Een programma telt de lijst getallen `3, 5, 7` in een lus op. Stuur bij elke ronde de huidige tussenstand als voortgangsmelding naar de standaardfout, en stuur na de lus het eindresultaat naar de standaarduitvoer, met rechtstreeks gebruik van de handles van de stromen.

Deze scheiding doet ertoe: het resultaat kan opgevangen of doorgesluisd worden, terwijl de voortgangsmeldingen op de standaardfout uit de weg blijven.

## Voorbeeld

Wanneer je het programma draait, verschijnen beide stromen op het scherm — de tussenstanden, dan het eindresultaat:

```
running total: 3
running total: 8
running total: 15
15
```

Maar als je de standaardfout weggooit, blijft alleen het echte resultaat over:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
