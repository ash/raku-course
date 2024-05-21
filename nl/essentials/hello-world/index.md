---
title: Hallo, Wereld! in Raku
---

{% include menu.html %}

Geweldig, we hebben de essentiële dingen geleerd die nodig zijn om met Raku te praten en de reactie te zien, dus laten we meteen naar het eerste echte programma gaan, 'Hallo, Wereld!'.

```raku
say 'Hallo, Wereld!';
```

Net voordat we de basisprincipes van functies leren, laten we een paar verschillende opties bekijken die je in dit programma kunt gebruiken.

Allereerst kun je haakjes om het functieargument plaatsen:

```raku
say('Hallo, Wereld!');
```

Ten tweede kun je andere functies gebruiken, namelijk `put` en `print`. Opnieuw, met of zonder haakjes:

```raku
put 'Hallo, Wereld!';

print("Hallo, Wereld!\n");
```

Merk op dat je de nieuwe regelkarakter handmatig aan het einde van het bericht moet toevoegen in het geval van `print`. Maar maak je geen zorgen, we zullen al deze details later behandelen.

Voordat we verder gaan, laat me nog een spannende optie zien. Je kunt een functie als een methode direct op de string aanroepen:

```raku
'Hallo, Wereld!'.say;
```

{% include nav.html %}