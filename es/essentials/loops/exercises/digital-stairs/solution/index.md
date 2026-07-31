---
title: 'Solution: Escaleras digitales'
---

{% include menu.html %}

El programa utiliza dos bucles y dos rangos.

## Código

Aquí tienes una de las posibles soluciones:

```raku
my $size = prompt 'Enter the size: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Encuentra el programa en el archivo [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/digital-stairs.raku).

## Salida

Ejecuta el programa e ingresa el tamaño de la estructura:

```console
$ raku exercises/loops/digital-stairs.raku
Enter the size: 7
1
12
123
1234
12345
123456
1234567
```

## Comentario

Observa cómo se imprime el dígito actual:

```raku
.print for 1..$n;
```

Al igual que con `say`, la rutina `print` se puede llamar como un método. En este caso, se llama en la [variable de tema](/es/essentials/loops/topic) `$_`.

{% include nav.html %}