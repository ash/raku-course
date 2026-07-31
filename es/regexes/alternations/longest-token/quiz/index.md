---
title: Quiz — Alternativas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? Fíjate en la barra simple `|`.

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

La barra simple `|` usa el emparejamiento del token más largo: cuando más de una alternativa coincide en el mismo punto, gana la más larga. Aunque `down` está escrito primero y coincidiría, `|` prefiere el más largo `download`. Con `||` en cambio habría ganado `down`.

</div>

{% include nav.html %}
