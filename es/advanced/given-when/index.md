---
title: '`given` y `when`'
---

{% include menu.html %}

Cuando un programa necesita elegir entre varias alternativas, una cadena de comprobaciones `if` y `elsif` puede volverse larga y repetitiva. En esa situación, la construcción `given`/`when` suele ser más clara. Es similar a la sentencia `switch` que se encuentra en otros lenguajes.

El bloque `given` toma un valor y lo convierte en el _topico_ — la variable especial `$_`. Cada bloque `when` se compara entonces con ese topico, y el primero que coincida se ejecuta:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Este programa imprime:

```
two
```

A diferencia de un `switch` en algunos otros lenguajes, no hay fall-through: en cuanto un `when` coincide, su bloque se ejecuta y el bloque `given` termina. Los bloques `when` restantes no se evaluan.

## El bloque `default`

Un bloque `default` se ejecuta cuando ninguno de los bloques `when` ha coincidido. Cumple el mismo papel que la rama `else` de una sentencia `if`:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Como `$n` no es ni `1` ni `2`, el programa imprime:

```
many
```

{% include nav.html %}
