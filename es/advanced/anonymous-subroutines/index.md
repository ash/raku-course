---
title: Subrutinas anónimas
translations_gpt:
---

{% include menu.html %}

Una subrutina no tiene que tener un nombre. Una subrutina _anonima_ se escribe igual que una normal, pero sin nombre, y normalmente se almacena en una variable para poder llamarla después.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

La variable `$double` contiene la subrutina, y `$double(5)` la llama con el argumento `5`.

## Bloques puntiagudos

Raku ofrece una notación más corta para lo mismo: el _bloque puntiagudo_. Usa la flecha `->` para introducir los parámetros, y no necesita ni la palabra `sub` ni paréntesis alrededor de ellos:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Esta es la forma más común de escribir una pequeña subrutina anonima.

## El sigilo `&`

Si prefieres llamar a la subrutina por un nombre en lugar de a través de una variable `$`, declara la variable con el sigilo `&`. Entonces puedes llamarla sin el sigilo, exactamente como una subrutina ordinaria:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Pasandola a otra función

No es necesario almacenar una subrutina anonima en una variable. Como es simplemente un valor, puedes pasarla directamente a una función que espere una, como `map`, `grep` o `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

El bloque puntiagudo es la subrutina anonima aquí, y `map` la llama una vez por cada elemento. Esto es, de hecho, lo que has estado haciendo todo el tiempo: cada bloque `{ ... }` y `-> $x { ... }` que has pasado a `map` y `grep` es una pequeña subrutina anonima, escrita justo donde se necesita en lugar de ser nombrada primero.

{% include nav.html %}
