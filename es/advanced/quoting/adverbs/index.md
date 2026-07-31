---
title: Adverbios de entrecomillado
---

{% include menu.html %}

El comportamiento de una construcción de entrecomillado se puede ajustar con _adverbios_. Cada característica del entrecomillado — interpolar escalares, ejecutar closures incrustados, procesar barras invertidas — se controla con su propio adverbio, que activa o desactiva esa única característica, de modo que puedes partir de `q` o `Q` y añadir exactamente las funciones que necesites.

Algunos adverbios comunes:

* `:s` / `:scalar` — interpola variables escalares (`$x`)
* `:c` / `:closure` — interpola código incrustado en `{ … }`
* `:b` / `:backslash` — procesa secuencias de escape con barra invertida como `\n`

Añade uno a `q` para habilitar una sola característica. Por ejemplo, permitir código incrustado pero nada más:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — plain q leaves the block untouched
say q:c/result: {3 * 4}/; # result: 12        — :c runs the block
```

Con `q` simple, `{ 3 * 4 }` se imprime tal cual; solo `:c` hace que el bloque se ejecute e inserta su valor, mientras que un `$variable` seguiría sin tocarse. Observa los delimitadores `/…/` aquí: delimitar la cadena con `{…}` también funcionaría — el compilador cuenta las llaves anidadas correctamente — pero entonces el `{ 3 * 4 }` interior se lee como parte del texto delimitado en lugar de como un closure, así que `:c` lo dejaría literal. Cuando el texto contiene un bloque `{ … }`, elige un delimitador distinto de `{…}` para que el closure realmente se ejecute. Puedes añadir interpolación escalar al `Q`, que por defecto es literal:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Los adverbios también **desactivan** características con un `!`. Para usar `qq` pero mantener `$` literal:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` equivale a `Q` con todos los adverbios de interpolación activados, y `q` equivale a `Q` con un conjunto más reducido. Los adverbios te dan control detallado entre esos dos extremos.

{% include nav.html %}
