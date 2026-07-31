---
title: Quiz — Funciones de orden superior
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` devuelve una subrutina que recuerda el prefijo y lo antepone a lo que le den. Guardada en `&hi` y llamada con `'Bob'`, devuelve `Hi, Bob`: una subrutina devuelta funciona igual de bien con cadenas que con números.

</div>

{% include nav.html %}
