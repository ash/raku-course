---
title: De feed-operator
translations_gpt:
---

{% include menu.html %}

De feed-operator `==>` stuurt een lijst van links naar de bewerking rechts. Het resultaat stroomt daarna door naar waar de volgende `==>` heen wijst, en eindigt in een variabele die het opvangt:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Lees het van links naar rechts: neem `1..10`, houd de even getallen, en bewaar het resultaat in `@evens`. De operator `%%` betekent "is deelbaar door", dus `* %% 2` houdt de even getallen.

De belangrijke regel is dat een feed in een **doel moet eindigen** — meestal `my @array` (of een bestaande variabele). De gegevens stromen er voorwaarts in. De toekenning andersom schrijven, met `=`, doet niet wat je wilt, omdat de feed en de toekenning met elkaar concurreren; laat de feed altijd in zijn variabele eindigen.

Een feed is slechts een andere manier om een keten lijstbewerkingen te schrijven. Hetzelfde resultaat had je als `my @evens = (1..10).grep(* %% 2)` kunnen schrijven. De feed-vorm komt tot zijn recht wanneer er meerdere fasen zijn, zoals het volgende onderwerp laat zien.

{% include nav.html %}
