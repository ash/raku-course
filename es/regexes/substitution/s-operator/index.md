---
title: El operador de sustitución
translations_gpt:
---

{% include menu.html %}

El operador de sustitución es `s///`. Parece un emparejamiento con una segunda ranura: el patrón va entre las dos primeras barras y el texto de reemplazo entre las dos últimas:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

La sustitución cambia la variable **en el sitio**, así que `$s` se actualiza. El texto de la parte de reemplazo es literal: no lo pones entre comillas.

Igual que el emparejamiento, la sustitución toca por omisión solo la **primera** aparición. Añade el adverbio `:g` para reemplazar todas:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Si quieres conservar el original y producir una **copia** modificada en lugar de cambiarlo en el sitio, usa el operador en **mayúscula** `S///`: hace la sustitución y devuelve la cadena cambiada, dejando intacto el original. Como no actualiza ninguna variable en el sitio, apúntalo a una con `given` en lugar de con `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(Escribir `$orig ~~ S///` te avisa de que uses `given` en su lugar: con `S///` no hay nada que modificar en el sitio.)

El mismo comportamiento no destructivo está también disponible como método, `.subst`, que devuelve una cadena nueva:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
