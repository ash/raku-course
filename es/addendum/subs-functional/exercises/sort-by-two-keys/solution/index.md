---
title: 'Solución: Ordenar por dos claves'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Puedes encontrar el código fuente en el archivo [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Salida

```
Bob (25)
Anna (30)
Cara (30)
```

## Comentarios

1. Cuando un bloque de `.sort` devuelve una lista, Raku compara por el primer elemento
y después por el segundo, así que `{ .<age>, .<name> }` ordena primero por edad y usa
el nombre solo para deshacer empates.

1. Anna y Cara comparten la edad `30`, así que se ordenan alfabéticamente; Bob, más
joven, va primero.

{% include nav.html %}
