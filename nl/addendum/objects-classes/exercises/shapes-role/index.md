---
title: Oefening ’Vormen die een rol delen‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Definieer een rol `Shape` die een methode `area` vereist, en maak daarna klassen `Circle` en
`Square` die de rol doen.

Schrijf een subroutine `describe` waarvan de parameter *getypeerd* is als `Shape`, zodat ze
elke vorm accepteert en alles weigert wat dat niet is. Ze moet de oppervlakte van de vorm afdrukken,
gelabeld met de naam van haar klasse. Roep haar aan voor een cirkel met straal `2` en een vierkant met
zijde `3`.

De subroutine controleert nooit welke soort vorm ze ontving: omdat haar parameter
een `Shape` is, heeft het object gegarandeerd een methode `area`, dus werkt dezelfde
aanroep `.area` op welke vorm er ook binnenkomt. Dat is wat de rol je geeft —
één enkel type dat je kunt eisen, en één stuk code dat elke klasse die de rol doet
uniform behandelt.

## Voorbeeld

Het programma drukt af:

```
Circle: 12.56636
Square: 9
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
