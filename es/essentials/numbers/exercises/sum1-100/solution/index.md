---
title: Solución a ‘Suma de números del 1 al 100’
---

{% include menu.html %}

Para calcular la suma de números enteros del 1 al 100, por supuesto, es posible sumar todos esos números en una sola expresión larga. O crear un bucle (cubriremos los bucles en las secciones posteriores). Pero la mejor solución es usar una [fórmula](https://es.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯) bien conocida:

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Con la fórmula, la solución se vuelve bastante trivial.

## Código

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "La suma de los números del 1 al $N es $sum.";
```

🦋 Puedes encontrar el código completo en el archivo [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Salida

```console
$ raku exercises/numbers/sum1-100.raku 
La suma de los números del 1 al 100 es 5050.
```

{% include nav.html %}