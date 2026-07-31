---
title: '`gather` y `take`'
---

{% include menu.html %}

El par `gather` y `take` es una forma flexible de construir una lista. Envuelves algo de código en un bloque `gather`, y cada vez que ese código llama a `take`, el valor se agrega a la lista que `gather` produce.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

Las tres llamadas a `take` aportan tres valores, y `gather` los recopila en la lista almacenada en `@result`.

La verdadera fortaleza de este par se muestra cuando las llamadas a `take` se distribuyen a través del flujo de control ordinario, como un bucle con una condición. La lista entonces contiene solo los valores que elegiste tomar:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Aquí el bucle recorre los números del 1 al 10, pero solo se toman los pares, así que `@evens` termina conteniendo `2, 4, 6, 8, 10`. (El operador `%%` verifica si un numero es divisible de manera exacta.)

Esta separación es lo que hace a `gather`/`take` tan práctico: el código circundante decide _cuando_ producir un valor, y `gather` silenciosamente recopila todo lo que se haya tomado.

{% include nav.html %}
