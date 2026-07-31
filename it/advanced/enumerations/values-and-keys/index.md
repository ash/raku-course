---
title: Valori e chiavi
---

{% include menu.html %}

Ogni costante di un enum porta con se' sia un nome che un numero. Il metodo `.value` restituisce il numero, e il metodo `.key` restituisce il nome come stringa:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Non e' obbligatorio accettare la numerazione automatica a partire da zero. Si possono scrivere le costanti come coppie per scegliere i valori manualmente:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Qui la settimana lavorativa e' numerata a partire da uno invece che da zero.

Il tipo enum stesso puo' elencare tutte le sue costanti. Il metodo `.enums` restituisce una mappa da ogni nome al suo valore:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Tra `.value`, `.key` e `.enums`, ci si puo' muovere liberamente da una costante al suo numero, da un numero ai dati corrispondenti e sull'intero insieme, ed e' questo che rende gli enum utili per cose come menu, stati e tabelle di ricerca.

{% include nav.html %}
