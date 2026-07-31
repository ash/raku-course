---
title: Tipos a nivel de máquina
---

{% include menu.html %}

Los tipos nativos tienen nombres en minúsculas: `int`, `num` y `str`. Declaras una variable con uno de ellos de la misma forma que lo harías con `Int` o `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Un valor nativo corresponde directamente a un registro o palabra de la máquina, sin el objeto envolvente que lleva un valor normal de Raku. Esto hace que los tipos nativos sean más rápidos y compactos, lo cual importa en bucles numéricos intensivos y en arrays grandes.

Hay un comportamiento que debes tener en cuenta desde el principio: una variable nativa nunca puede ser indefinida. Mientras que un contenedor ordinario `Int` comienza como el indefinido `Any`, un `int` nativo comienza en **cero**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Lo mismo aplica a los arrays nativos, que se declaran colocando el tipo nativo antes de la variable `@`:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Un array así almacena sus elementos como enteros crudos de la máquina en lugar de objetos `Int` encapsulados, por lo que usa menos memoria. Cuando introspecciones un valor nativo, se _encapsula_ automáticamente en el tipo completo correspondiente, razón por la cual `(my int $b).WHAT` reporta `(Int)`.

{% include nav.html %}
