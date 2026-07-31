---
title: Exists y delete
---

{% include menu.html %}

El adverbio `:exists` convierte un subíndice en una pregunta: ¿hay un valor en esta clave o índice? Devuelve un valor booleano sin obtener nada:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Esta es la forma correcta de comprobar si una clave existe, porque simplemente leer `%h<plum>` devolvería un valor indefinido o, dependiendo de los datos, ocultaría la diferencia entre "ausente" y "presente pero indefinido".

El adverbio `:delete` elimina la entrada y devuelve el valor que contenía:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

La entrada `apple` ha desaparecido, y el valor eliminado `1` se devuelve para que puedas usarlo.

Ambos adverbios funcionan también con arrays, por índice:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Si tienes curiosidad por saber cómo se verá el array después de eliminar un elemento del medio, aquí está la respuesta:

```raku
say @a; # [10 (Any) 30]
```

Así, una notación única y consistente te permite consultar y modificar contenedores en su lugar, en vez de recurrir a métodos separados.

{% include nav.html %}
