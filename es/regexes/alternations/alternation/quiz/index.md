---
title: Quiz — Agrupación
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Los corchetes agrupan la alternativa `hello | good` sin capturar, así que el patrón significa «`hello` o `good`, y después `bye`». En `goodbye` coincide la alternativa `good` y le sigue `bye`, dando `｢goodbye｣`.

</div>

{% include nav.html %}
