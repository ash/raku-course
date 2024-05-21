---
title: Excluyendo los extremos de un rango
---

{% include menu.html %}

Para excluir uno de los extremos o ambos, modifica el operador de creación de rango con el carácter `^`. Hay tres operadores más que se pueden construir de esta manera. Los comentarios enumeran los números que generan los rangos.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

En casos simples como los mostrados arriba, puedes omitir los espacios alrededor del operador de rango:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Para un rango que comienza con 0, como `0..^5`, existe una sintaxis abreviada: `^5`.

{% include nav.html %}