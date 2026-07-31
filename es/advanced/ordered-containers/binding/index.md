---
title: Enlace con `:=`
translations_gpt:
---

{% include menu.html %}

Hasta ahora, cada variable que creaste generaba un nuevo contenedor, y la asignación con `=` colocaba un valor _dentro_ de ese contenedor. La vinculación (binding), escrita con `:=`, es diferente: hace que un nombre se refiera a un contenedor _existente_ en lugar de crear uno nuevo.

Después de la vinculación, los dos nombres comparten el mismo contenedor, por lo que un cambio realizado a través de uno de ellos es visible a través del otro:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Aquí, `$y := $x` no copia el valor `10`. Hace que `$y` sea otro nombre para el mismo contenedor que `$x`. Cuando `$x` se establece posteriormente en `20`, leer `$y` también devuelve `20`.

Compara esto con la asignación ordinaria, que copia el valor en un contenedor separado:

```raku
my $x = 10;
my $y = $x; # una copia simple

$x = 20;
say $y; # 10
```

La vinculación también funciona con arrays. Lo siguiente hace que `@alias` sea otro nombre para `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Un detalle más: si vinculas un nombre directamente a un valor literal, no hay contenedor detrás de él, por lo que el nombre se convierte en solo lectura:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
