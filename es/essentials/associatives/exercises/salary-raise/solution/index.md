---
title: 'Solución: Aumento de salario'
---

{% include menu.html %}

El programa necesita actualizar uno de los valores del hash dado. Asignar un nuevo valor no difiere mucho de establecer un nuevo valor de una variable escalar.

## Código

Aquí está la solución:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # en porcentajes

%employee<salary> *= (1 + $raise / 100);
say "Nuevo salario de %employee<full-name>: %employee<salary>";
```

🦋 Encuentra el programa en el archivo [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Salida

Al ejecutar el programa, asegúrate de haber realizado cálculos válidos y convertido correctamente el número de porcentajes.

```console
$ raku exercises/associatives/salary-raise.raku
Nuevo salario de Eliza Vents: 3150
```

{% include nav.html %}