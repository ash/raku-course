---
title: Variables locales
---

{% include menu.html %}

¿Qué pasa si declaras una variable no solo en el ámbito global sino también localmente en el bloque?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

El programa tiene ahora dos variables independientes. Comparten el nombre, pero todas las referencias a `$x` en el ámbito global se refieren a la variable global, mientras que el `$x` dentro del bloque es una variable local, diferente del `$x` global. El programa imprime dos valores diferentes:

```console
$ raku t.raku
42
1
```

{% include nav.html %}