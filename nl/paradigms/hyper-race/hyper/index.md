---
title: Parallelle maps met hyper
translations_gpt:
---

{% include menu.html %}

Roep `.hyper` op een lijst aan vóór een `map` of `grep`, en het werk wordt over meerdere werkthreads verspreid — terwijl de resultaten toch in de **oorspronkelijke volgorde** terugkomen:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Dit ziet er precies uit als een gewone `map`, en het resultaat is identiek; het enige verschil is dat de verdubbelingen mogelijk tegelijk op verschillende kernen berekend zijn.

`.hyper` werkt op dezelfde manier met `grep` — elk element wordt parallel getest, en de elementen die slagen komen toch in hun oorspronkelijke volgorde terug:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Omdat `.hyper` de volgorde bewaart, is het een rechtstreekse vervanger voor een trage `map` of `grep`: niets wat van de volgorde van de resultaten afhangt hoeft te veranderen. Het voordeel treedt pas op wanneer het werk per element groot genoeg is om tegen de kosten van het coördineren van threads op te wegen — een getal kwadrateren is in werkelijkheid veel te goedkoop om te parallelliseren. Voor werkelijk duur werk per element over een grote lijst kan `.hyper` een lange wachttijd in een korte veranderen voor de prijs van één methodeaanroep.

Eén ding om in gedachten te houden: of het werk *werkelijk* over kernen verspreid wordt, is aan de compiler. De taal legt de resultaten vast — en voor `.hyper` hun oorspronkelijke volgorde — maar zij eist geen daadwerkelijke parallelle uitvoering. `.hyper` en `.race` **vragen** om parallellisme in plaats van het te vereisen, dus een bepaalde compiler mag ze op een threadpool draaien of de elementen stilletjes op volgorde verwerken. Beschouw ze als een kans op versnelling, niet als een garantie ervan.

Omdat de volgorde bewaard blijft, komen bewerkingen die er *van afhangen* toch goed uit. Hier wordt elk woord parallel in hoofdletters gezet, en toch voegen de stukken zich in hun oorspronkelijke volgorde weer tot de zin:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
