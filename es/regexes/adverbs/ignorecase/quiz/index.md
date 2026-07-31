---
title: Quiz — Ignorecase
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? El patrón está en mayúsculas y el texto en forma mixta.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

El adverbio `:i` desactiva la distinción entre mayúsculas y minúsculas, y funciona en ambas direcciones: aquí el patrón en mayúsculas `HELLO` empareja el texto en forma mixta. El resultado es el texto coincidente tal como aparece en la cadena, `｢Hello｣`.

</div>

{% include nav.html %}
