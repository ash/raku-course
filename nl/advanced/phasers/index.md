---
title: Phasers
translations_gpt:
---

{% include menu.html %}

Een _phaser_ is een speciaal blok dat automatisch wordt uitgevoerd op een bepaald moment in de levenscyclus van een programma, in plaats van op de plek waar het in de broncode staat. Je roept een phaser niet aan; je geeft alleen aan _wanneer_ de code moet worden uitgevoerd, door het blok een naam te geven.

De meest gebruikte phasers markeren fasen van het programma als geheel:

* `BEGIN` wordt zo vroeg mogelijk uitgevoerd, terwijl het programma nog wordt gecompileerd;
* `INIT` wordt eenmaal uitgevoerd bij het begin van de uitvoering, vóór de hoofdcode;
* `END` wordt eenmaal uitgevoerd aan het einde, nadat de hoofdcode is afgelopen.

Het volgende programma plaatst deze phasers tussen gewone instructies. Merk op dat de uitvoer niet de volgorde van de regels in het bestand volgt:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

Het programma drukt af:

```
BEGIN
INIT
main body
END
```

`BEGIN` wordt als eerste uitgevoerd, tijdens de compilatie. Vervolgens wordt tijdens de uitvoering `INIT` uitgevoerd vóór de hoofdcode. De hoofdcode wordt daarna afgedrukt, en `END` wordt als laatste uitgevoerd, ongeacht waar het geschreven stond.

Een veelvoorkomend gebruik van `END` is het afdrukken van een samenvatting of het opruimen van iets vlak voordat het programma eindigt, terwijl `BEGIN` handig is voor werk dat moet gebeuren voordat iets anders plaatsvindt.

{% include nav.html %}
