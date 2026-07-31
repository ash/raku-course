---
title: Quiz — Reductio
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` indicem a sinistra ad dextram complicat, et **primum** bloci argumentum semper est effectus adhuc collectus — hic operandum sinistrum operatoris `-`. Itaque `((10 - 1) - 2) - 3` computat, id est `9 - 2 - 3 = 4`. In alteram partem complicans, `10 - (1 - (2 - 3))`, `8` daret, et addens loco subtrahendi `16`. Dissimilis `+`, subtractio ab ordine pendet, itaque partes duorum argumentorum revera intersunt.

</div>

{% include nav.html %}
