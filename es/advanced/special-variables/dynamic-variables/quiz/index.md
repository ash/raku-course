---
title: Quiz — Variables dinámicas
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my $*n = 1;
sub show { say $*n }

sub run {
    my $*n = 2;
    show();
}

run();
```

{:.quiz}
0 | 1
1 | 2
0 | Nothing
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`show` está escrita en el nivel superior, justo al lado de `my $*n = 1`, pero esa ubicación es irrelevante — una variable dinámica se busca a través de la *pila de llamadas*, no por dónde está situado el código. Aquí `show` es llamada desde `run`, que redeclaró `$*n` como `2`, así que ese es el valor vigente y el programa imprime `2`.

</div>

{% include nav.html %}
