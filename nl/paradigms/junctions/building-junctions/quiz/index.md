---
title: 'Quiz — Juncties'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Een `all`-junctie is alleen waar wanneer **elke** waarde matcht. De test `4 == all(2, 4, 6)` vraagt of `4` gelijk is aan `2` én `4` én `6` — wat niet zo is, dus is het resultaat `False`.

Benieuwd wat het `True` *zou kunnen* maken? De linkerkant zou tegelijk gelijk moeten zijn aan elk van `2`, `4` en `6`. Geen enkel getal kan dat — maar een junctie links wel: een `any`-junctie die **alle drie** die waarden bevat werkt, want dan slaagt elk van de vergelijkingen. De twee kanten hoeven niet even groot te zijn — links mag extra waarden dragen:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

De eerste is `True` omdat `any(2, 4, 6, 8)` nog steeds gelijk is aan `2`, `4` en `6` (de extra `8` is onschadelijk). De tweede is `False` omdat de linkerkant geen `6` heeft, dus `links == 6` mislukt.

</div>

{% include nav.html %}
