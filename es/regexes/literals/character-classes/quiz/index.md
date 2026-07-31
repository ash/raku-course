---
title: Quiz — Clases propias
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? La clase está **negada**.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

La clase `<-[a..z]>` empareja un solo carácter que **no** sea una letra minúscula. Recorriendo `abc123` desde la izquierda, los tres primeros caracteres son letras minúsculas y se saltan; el primer carácter que no es una letra minúscula es el dígito `1`, así que la coincidencia es `｢1｣`.

</div>

{% include nav.html %}
