---
title: Arrays
translations_gpt:
---

{% include menu.html %}

Un array es un contenedor ordenado cuyos elementos son a su vez contenedores escalares.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

El sigilo `@` indica que dicha variable se comporta como un objeto `Positional`, por lo que puedes usar subíndices para acceder a elementos individuales:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Debido a que cada elemento es un contenedor escalar, puedes asignarle un nuevo valor, exactamente como lo harías con una variable escalar independiente:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

También puedes asignar un valor de un tipo diferente, por ejemplo:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Esto es lo que hace que los arrays sean _mutables_: cada posición es un contenedor que puede recibir un nuevo valor. Como verás en el siguiente tema, las [listas](/es/advanced/ordered-containers/lists) se comportan de manera diferente.

{% include nav.html %}
