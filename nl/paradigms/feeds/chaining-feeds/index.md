---
title: Feeds aan elkaar rijgen
translations_gpt:
---

{% include menu.html %}

De echte waarde van feeds komt naar voren wanneer je meerdere fasen hebt. Elke `==>` geeft haar resultaat aan de volgende bewerking door, zodat een hele pijplijn van boven naar beneden leest in de volgorde waarin het werk gebeurt:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Volg de gegevens de pagina af: begin met `1..10`, houd de even getallen, kwadrateer ze elk, en verzamel het resultaat. De even getallen zijn `2, 4, 6, 8, 10`, en hun kwadraten zijn `4, 16, 36, 64, 100`.

Als methodeketen geschreven is dezelfde pijplijn `(1..10).grep(* %% 2).map(* ** 2)` — en dat leest net zo van links naar rechts als de feed. Een methodeketen is niet binnenstebuiten; ze draait haar fasen in precies dezelfde volgorde. De vorm die werkelijk binnenstebuiten leest is de bewerkingen als gewone functies nestelen, `map(* ** 2, grep(* %% 2, 1..10))`, waar je bij de binnenste aanroep moet beginnen en naar buiten moet werken.

Een feed is dus geen manier om aan binnenstebuiten code te ontsnappen — het is een andere schrijfwijze van een pijplijn van links naar rechts. Wat hij toevoegt is opmaak: elke `==>`-fase mag op een eigen regel staan, en die ene operator werkt hetzelfde voor stappen in methode- en in functiestijl, wat een lange pijplijn goed scanbaar houdt. Feeds en methodeketens doen uiteindelijk hetzelfde werk; kies wat een bepaalde transformatie het duidelijkst maakt.

{% include nav.html %}
