---
title: Solución de 'Corregir los identificadores'
---

{% include menu.html %}

Hay más de una manera de hacer que los identificadores sean correctos. Algunas opciones posibles se muestran aquí:

## Código

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Todos los identificadores son válidos, pero probablemente sea mejor evitar nombres con apóstrofes si `$no` tienes razones fuertes para usarlos.

🦋 Puedes encontrar el código fuente en el archivo [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/identifiers.raku).

## Salida

Este programa no genera ninguna salida, pero no deberías obtener ningún error cuando Rakudo lo compile y ejecute:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Comentarios

Enumeremos los problemas con los nombres originales:

1. No se permiten espacios: `$ A G E`.
1. Una variable necesita un sigil: `Name` (es posible tener variables sin sigil en Raku, pero aún así no pueden ser declaradas como `my Name`).
1. Un apóstrofe (en realidad, una comilla simple) no puede iniciar un nombre: `$'Middle'Name`.
1. Un dígito tampoco puede iniciar un nombre: `$2address`.
1. Dos guiones no pueden estar juntos: `$from--to`.

{% include nav.html %}