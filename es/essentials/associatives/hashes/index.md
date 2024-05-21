---
title: Hashes
---

{% include menu.html %}

Un _hash_ es otro ejemplo de tipos de datos asociativos en Raku. Es un tipo de datos agregado que asigna los nombres de sus elementos a sus valores. Vamos a introducir el nuevo sigil que usan las variables hash: `%`.

```raku
my %capitals;
```

Ahora puedes usar el hash y asignarle algunos valores iniciales.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

Como con otros tipos de datos, ambas acciones se pueden hacer juntas:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Accediendo a los elementos

Subscribir los elementos es similar a lo que hemos visto para [pares](../pairs). Usa un par de corchetes angulares o llaves con una cadena:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Los hashes son mutables, por lo que puedes tanto cambiar los valores existentes como agregar nuevos:

```raku
%capitals<Germany> = 'Berlin';
```

## Claves y valores

Los dos métodos incorporados, `keys` y `values`, devuelven las listas de las claves y los valores de un hash:

```raku
say %capitals.keys;
say %capitals.values;
```

Aquí hay un ejemplo de la salida de este programa:

    (Germany Italy France)
    (Berlin Rome Paris)

Nota que los elementos del hash no están ordenados, pero el orden de las claves y los valores, devueltos por los métodos anteriores, es idéntico.

{% include nav.html %}