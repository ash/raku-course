---
title: Comparando números
---

{% include menu.html %}

Para comparar dos números, utiliza los siguientes operadores. Todos ellos son bastante obvios si estás familiarizado con otros lenguajes de programación.

`==` | Igual
`!=` | No igual
`<` | Menor que
`<=` | Menor o igual que
`>` | Mayor que
`>=` | Mayor o igual que

## Aproximadamente igual

Además de los operadores estándar, Raku añade el operador de aproximadamente igual `=~=`, que compara los números de manera aproximada. Su resultado es `True` si los dos números están relativamente cerca uno del otro. La diferencia relativa máxima no debe exceder el valor incorporado `$*TOLERANCE`, que es igual a `1e-15`.

## Versiones Unicode

Algunos de los operadores anteriores tienen sus equivalentes en Unicode:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Ejemplos

Algunos ejemplos con los operadores que comparan números:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Ten en cuenta que el número `1.000000000000000000000001` es un número `Rat`, por lo que no pierdes precisión en una expresión con un número cercano `1.000000000000000000000002`. El último ejemplo con `2e17` opera con números `Num`, que tienen precisión restringida.

{% include nav.html %}