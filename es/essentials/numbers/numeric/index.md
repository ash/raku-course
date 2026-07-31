---
title: Números de punto flotante
---

{% include menu.html %}

En la sección anterior, vimos que números como `1.5` son números racionales. Para crear un número que corresponda a un número `double` en C++, usa la notación científica:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

En este caso, Raku crea instancias del tipo de dato `Num` y almacena los datos internamente como un número IEEE.

## Constantes integradas

A continuación se enumeran algunas constantes que puedes usar directamente. Son números del tipo `Num`. Están disponibles tanto en variantes ASCII como Unicode:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | igual a `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}