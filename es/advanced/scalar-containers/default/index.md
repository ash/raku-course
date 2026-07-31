---
title: Valores predeterminados
translations_gpt:
---

{% include menu.html %}

Cuando se crea una nueva variable escalar sin una asignación inmediata, el contenedor aun mantiene un valor — su valor por defecto. El valor por defecto exacto depende del tipo de la variable.

El programa a continuación no es la mejor forma de usar Raku, pero ilustra el punto:

```raku
my $int;
say $int + 5;
```

La salida contiene `5`, que puede ser lo que esperabas si asumiste que el valor por defecto de `$int` es `0`. Sin embargo, el programa también imprime una advertencia:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Para eliminar esta incertidumbre, puedes asignar un valor explícitamente:

```raku
my $int = 0;
say $int + 5; # 5
```

O declarar un valor por defecto con el trait `is default`:

```raku
my $int is default(0);
say $int + 5; # 5
```

El valor por defecto no se limita a cero. Puede ser cualquier valor que consideres un buen candidato, por ejemplo:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
