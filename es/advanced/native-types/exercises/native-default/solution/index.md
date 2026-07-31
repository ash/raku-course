---
title: 'Solution: El valor predeterminado nativo'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Encuentra el programa en el archivo [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Salida

```
0
[]
```

## Comentarios

1. Un `num` nativo no puede ser indefinido, así que al igual que un `int` nativo, comienza en `0` en lugar de en `(Num)`.

1. Un `str` nativo comienza como la cadena vacía, por eso los corchetes aparecen sin nada entre ellos. Ninguno de los tipos nativos contiene jamás un valor indefinido.

1. Los especificadores de tipo son esenciales aquí. Si los omites — escribes `my $n; my $s;` — las variables se convierten en contenedores ordinarios que comienzan *indefinidos* (`Any`). Entonces `say $n` imprime `(Any)`, e interpolar el `$s` indefinido genera la advertencia *"Use of uninitialized value … in string context"*. Son los tipos nativos `num` y `str` los que garantizan los valores por defecto `0` y cadena vacía.

{% include nav.html %}
