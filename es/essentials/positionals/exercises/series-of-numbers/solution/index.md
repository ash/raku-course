---
title: Solución de ‘Imprimir una serie de números’
---

{% include menu.html %}

Hay más de una forma de resolver el problema dado.

## Código 1

La primera solución es más al estilo de Raku y compacta.

```raku
my $begin = prompt 'Inicio: ';
my $end = prompt 'Fin: ';

.say for $begin .. $end;
```

🦋 Encuentra el programa en el archivo [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Código 2

La segunda posible solución puede usar la declaración `loop`.

```raku
my $begin = prompt 'Inicio: ';
my $end = prompt 'Fin: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Encuentra el programa en el archivo [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

Como puedes ver, la primera variante es significativamente más corta y expresiva.

## Discusión

En la primera variante del programa, se utiliza la [forma postfija del bucle `for`](/es/essentials/loops/postfix-for). En el segundo programa, se elige un `loop`.

## Salida

Introduce los dos números en la consola y ejecuta el programa. Ambas variantes producen la misma salida.

```console
$ raku exercises/positionals/series-of-numbers.raku
Inicio: 15
Fin: 19
15
16
17
18
19
```

{% include nav.html %}