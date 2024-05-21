---
title: Operaciones booleanas
---

{% include menu.html %}

Puedes realizar todas las operaciones estándar con valores booleanos: AND, OR y OR exclusivo (o XOR):

```raku
say False && True; # AND
say False || True; # OR
say False ^^ True; # XOR
```

Este programa imprime los siguientes resultados:

    False
    True
    True

## Negación

Para negar un valor booleano, usa el operador prefijo `!`:

```raku
say !False; # True
```

Los valores booleanos se pueden almacenar en variables escalares:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}