---
title: 'Solution: Índices impares'
---

{% include menu.html %}

Para resolver esta tarea, puedes usar la construcción `loop` e incrementar la variable del bucle en 2 en cada iteración. Pero también puedes usar un bucle `for` y escanear los números desde 1 hasta la mitad de la longitud del arreglo, y luego multiplicarlos por dos.

## Código

Aquí está la solución:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Encuentra el programa en el archivo [odd-índices.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/odd-indices.raku).

## Salida

Primero, ejecuta el programa con los elementos de datos originales.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Luego, agrega un elemento más a los datos:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Confirma que el nuevo elemento con un índice impar aparece en la salida:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Comentarios

En la próxima parte del curso, volveremos a esta tarea para resolverla usando un enfoque completamente diferente.

{% include nav.html %}