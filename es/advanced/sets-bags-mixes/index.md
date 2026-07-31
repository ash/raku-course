---
title: Conjuntos, bolsas y mezclas
---

{% include menu.html %}

Además de los arrays y los hashes, Raku ofrece algunos contenedores especializados para colecciones de valores. El más simple es el `Set` — una colección desordenada de valores _distintos_, donde cada valor es miembro o no lo es, y los duplicados se ignoran.

Puedes crear un set con la rutina `set`. Los valores repetidos se reducen a uno solo:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Aunque se pasaron cinco números, el set tiene solo tres elementos, porque `1` y `2` aparecieron más de una vez.

La pregunta principal que le haces a un set es si un valor pertenece a él. El operador `∈` (que se lee "es un elemento de") devuelve un Booleano:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Si prefieres quedarte con ASCII simple, el mismo operador se puede escribir como `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

Los siguientes temas muestran cómo combinar sets, e introducen los bags y los mixes, que son parientes cercanos del set.

{% include nav.html %}
