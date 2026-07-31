---
title: 'Solución: Encadene una promesa'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Puedes encontrar el código fuente en el archivo [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Salida

```
RAKU!
```

## Comentarios

1. Cada `.then` construye una promesa nueva que se ejecuta en cuanto la anterior está lista. Dentro de su bloque, `.result` es el valor que produjo la promesa anterior.

1. El primer seguimiento convierte `'raku'` en `'RAKU'`; el segundo le añade `'!'`. Esperar la última promesa, `$r`, recorre la cadena entera y da `'RAKU!'`: una pequeña tubería en la que cada paso transforma el resultado del anterior.

{% include nav.html %}
