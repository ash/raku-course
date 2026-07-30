---
title: Aan een bestand toevoegen
translations_gpt:
---

{% include menu.html %}

Standaard vervangt `spurt` wat er in het bestand stond. Om in plaats daarvan aan het eind van een bestaand bestand toe te voegen, geef je het benoemde argument `:append` mee:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

De tweede `spurt` behoudt de bestaande inhoud en zet de nieuwe regel erachter, dus het bestand eindigt met beide regels:

```
line1
line2
```

Zonder `:append` zou de tweede aanroep het bestand overschreven hebben, waarna alleen `line2` zou overblijven. Toevoegen is nuttig voor dingen als logbestanden, waar elke draaibeurt van een programma aan een groeiend verslag toevoegt in plaats van opnieuw te beginnen.

{% include nav.html %}
