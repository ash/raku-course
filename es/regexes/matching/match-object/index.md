---
title: El objeto de coincidencia
translations_gpt:
---

{% include menu.html %}

Cuando un regex coincide, el emparejamiento inteligente devuelve un _objeto de coincidencia_. Ese mismo objeto se guarda también automáticamente en la variable especial `$/`, a veces llamada «la variable de coincidencia».

El objeto de coincidencia es mucho más que una respuesta de sí o no. Como cadena, es el texto que coincidió, ya sea con el método `.Str` o con el prefijo `~`, que es el operador de conversión a cadena y hace exactamente lo mismo:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

También sabe **dónde** se encontró la coincidencia en la cadena. El método `.from` da la posición donde empieza y `.to` la posición justo después de su final:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Las posiciones se cuentan desde cero, así que el dígito `7` está en el índice `5`.

Cuando el regex **no** coincide, el resultado no es un objeto de coincidencia en absoluto: es el valor especial `Nil`. Asignar `Nil` a un escalar lo deja sin definir:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Así que siempre puedes comprobar `.defined` (o simplemente usar el valor en contexto booleano) antes de leer el texto coincidente.

{% include nav.html %}
