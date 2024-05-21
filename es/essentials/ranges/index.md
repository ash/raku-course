---
title: Ranges
---

{% include menu.html %}

Los rangos en Raku generan listas de elementos secuenciales.

En el caso más simple, un rango es una lista de números enteros incrementales. Para crear un rango, usa el operador `..` y los dos valores que definen los valores mínimo y máximo del rango:

```raku
1 .. 5
```

Los espacios alrededor del operador son opcionales. La siguiente construcción se puede escribir como:

```raku
1..5
```

Aunque un rango es un medio para generar listas, sigue siendo un solo objeto, por lo que se puede guardar en una variable escalar:

```raku
my $r = 1 .. 5;
```

## No solo números

Es posible construir un rango a partir de otros tipos de datos, para los cuales Raku sabe cómo incrementarlos. Por ejemplo:

```raku
my $letters = 'a' .. 'z';
```

Los rangos son objetos de su propio tipo de datos en Raku. El tipo de la variable `$r` es `Range`.

{% include nav.html %}