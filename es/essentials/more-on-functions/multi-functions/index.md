---
title: Multi-funciones
---

{% include menu.html %}

Raku implementa _despacho múltiple_ basado en la firma de la función. Permite crear funciones que comparten el nombre pero tienen diferentes tipos de datos de entrada. Usa el declarador `multi` para cada una de las variantes de la función.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Está bien omitir `sub` después de `multi`.)

Si tienes dos variantes de la misma función, el compilador realiza un despacho múltiple dependiendo de los argumentos que vea en la llamada a la función. Compara las siguientes dos llamadas:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

La primera llamada activa la función con parámetros enteros, mientras que la segunda llamada ejecuta la segunda variante de la función que espera dos cadenas.

## Parámetros literales

Un caso interesante para las multi-funciones es tener variantes que tienen valores literales como parámetros. Considera las siguientes dos variantes:

```raku
multi sub f(42) {say 'Esta es la respuesta'}
multi sub f($x) {say "$x no es la respuesta"}
```

La primera variante solo se ejecuta cuando llamas a la función con el valor exacto de 42. En otros casos, se usa la segunda variante. El orden en el que se definen estas funciones no importa.

```raku
f(10); # 10 no es la respuesta
f(42); # Esta es la respuesta
```

{% include nav.html %}