---
title: Quiz — Alternative
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Nota la barra singola `|`.

```raku
say 'download' ~~ / down | download /;
```

{:.quiz}
1 | ｢download｣
0 | ｢down｣
0 | ｢load｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

La barra singola `|` usa il riconoscimento del token più lungo: quando più di un'alternativa corrisponde nello stesso punto, vince la più lunga. Anche se `down` è scritto per primo e corrisponderebbe, `|` preferisce il più lungo `download`. Con `||` invece avrebbe vinto `down`.

</div>

{% include nav.html %}
