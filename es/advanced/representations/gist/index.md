---
title: El método `.gist`
---

{% include menu.html %}

El método `.gist` devuelve una representación **legible para humanos** de un valor — la forma que querrías *leer*. Esto es exactamente lo que imprimen `say` (y `note`): llaman a `.gist` sobre cada argumento.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Para valores simples, el gist es simplemente el valor en sí. Para datos compuestos, `.gist` añade un poco de formato para que la estructura siga siendo legible:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Un objeto de tipo — un valor que representa al tipo en sí — se muestra con gist como su nombre entre paréntesis, lo que facilita identificarlo en la salida:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
