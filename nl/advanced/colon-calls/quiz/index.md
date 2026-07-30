---
title: Quiz — De dubbele-puntaanroep
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

De dubbele punt consumeert de *hele* rest van de instructie als argumentenlijst, dus `substr: 0, 3` is hetzelfde als `substr(0, 3)` -- beide argumenten worden doorgegeven. Beginnen bij index `0` en `3` tekens nemen levert `pro` op.

</div>

{% include nav.html %}
