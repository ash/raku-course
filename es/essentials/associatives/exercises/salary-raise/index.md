---
title: 'Ejercicio: Aumento de salario'
---

{% include menu.html %}

## Problema

Dado un hash con los datos de un empleado:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Aumenta el salario en un 5&thinsp;% y imprímelo junto con el nombre del empleado. Asegúrate de que el hash `%employee` mantenga valores correctos después del aumento.

## Ejemplo

Aquí está el resultado esperado del programa:

```console
$ raku salary-raise.raku
Nuevo salario de Eliza Vents: 3150
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}