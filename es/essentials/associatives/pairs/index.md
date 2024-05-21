---
title: Pares
---

{% include menu.html %}

Un par es una estructura de datos que mantiene un nombre y un valor. Forman un objeto sólido que puede almacenarse en una variable escalar. Aquí hay un ejemplo de cómo crear un par:

```raku
my $pair = name => 'Anna';
```

El tipo de la variable `$pair` es `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Es posible acceder al nombre y al valor por separado utilizando los métodos correspondientes `key` y `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Una característica importante de los pares es que son objetos inmutables. Esto significa que no puedes asignar un nuevo valor o dar un nuevo nombre a un par existente. Pero, por supuesto, puedes asignar un par completamente nuevo a la misma variable:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Subíndices

Hay otro método para leer el valor de un par. Puedes subíndicarlo con el nombre de su clave entre corchetes angulares. Así es como se hace:

```raku
say $pair<name>;
```

Observa que no es necesario entrecomillar el nombre de la clave si no contiene espacios. Si los contiene, las cosas se vuelven un poco más estrictas:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

No te pierdas el hecho de que esta vez se utilizan llaves.

{% include nav.html %}