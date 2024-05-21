---
title: Arrays
---

{% include menu.html %}

Los arreglos son tipos de datos agregados que pueden contener más de un valor. Eso diferencia a los arreglos de los [elementos escalares](/es/essentials/scalar-variables). Los elementos del arreglo pueden ser indexados (o _subscriptos_). En otras palabras, sus elementos tienen una posición (lo que explica el nombre general para este tipo de datos: posicionales).

Las variables de arreglo usan otro tipo de sigil: `@`. Las reglas para el nombre de la variable son las mismas que [para los escalares](/es/essentials/scalar-variables/identifiers/).

```raku
my @ciudades;
```

Hasta ahora, se ha creado el arreglo llamado `@ciudades`. Puedes llenarlo con algunos valores:

```raku
@ciudades = 'París', 'Roma', 'Berlín';
```

Alternativamente, es posible inicializar los valores inmediatamente:

```raku
my @ciudades = 'París', 'Roma', 'Berlín';
```

## Indexación

Para acceder a un solo elemento de un arreglo, usa un par de corchetes que colocas después del nombre de la variable:

```raku
say @ciudades[1];
```

Nota que el sigil siempre permanece igual. Como los elementos se cuentan desde cero, el elemento `@ciudades[1]` es `'Roma'` en nuestro ejemplo.

Los arreglos son mutables, por lo que puedes modificar fácilmente sus elementos simplemente asignándoles un nuevo valor:

```raku
@ciudades[0] = 'Roma';
@ciudades[1] = 'París';
```

Después de esto, la declaración `say @ciudades[1]` imprimirá el nuevo valor `'París'`.

## Tamaño

Para obtener la longitud actual de un arreglo, o, en otras palabras, el número de sus elementos, usa el método `elems`:

```raku
say @ciudades.elems; # 3
```

Si el arreglo aparece en un contexto donde se espera un parámetro numérico, el valor de retorno es el tamaño del arreglo:

```raku
say +@ciudades; # 3
```

Aquí, el [operador prefijo `+`](/es/essentials/coercion/prefixes) requiere un valor numérico de su argumento, por lo que el resultado de `+@ciudades` es `3`.

{% include nav.html %}