---
title: Operaciones con números
---

{% include menu.html %}

No hay duda de que ya conoces algunas de las operaciones que puedes hacer con números en Raku. Solo para mencionar que el símbolo de la _operación_ se llama _operador_. Los objetos sobre los que realizamos operaciones se llaman _operandos_.

## Aritmética

**Operador** | **Operación**
`+` | Adición
`-` | Sustracción
`*` | Multiplicación
`/` | División

Como Raku [soporta Unicode](/es/essentials/on-unicode) muy bien, algunos de estos operadores tienen equivalentes no ASCII:

`×` | Multiplicación
`÷` | División

Para cambiar el orden de ejecución, usa paréntesis:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Módulo

El operador de módulo es `%` como en muchos otros lenguajes.

`%` | Módulo

Devuelve el resto de la división entera de dos números, así que `10 % 3` es `1`. Ten en cuenta que `-10 % 3` es `2` ya que el resultado de la operación se define como la diferencia entre el primer número y la división redondeada hacia abajo multiplicada por el segundo número. Así, `$a % $b` es equivalente a `$a - $b * floor($a / $b)`.

## Divisibilidad

Raku añade un operador útil para probar si un número es divisible por otro número.

`%%` | Divisibilidad

Este es un operador infijo que necesita dos operandos: `10 %% 3`. Si el primer operando es divisible por el segundo operando, el resultado es un Booleano `True`. De lo contrario, `False`.

## Operaciones enteras

Hay operaciones especiales que devuelven resultados enteros. Sus operadores son palabras en lugar de símbolos.

`div` | División entera
`mod` | Módulo entero

El operador `div` redondea hacia abajo el resultado, así que `10 div 3` es `3`, y `-10 div 3` es `-4`.

Tanto `div` como `mod` esperan operandos enteros. Así que, el siguiente programa no funcionará si descomentas las líneas marcadas como `Error`:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Error

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Error
```

## Potencia

Hay dos formas de obtener el resultado de _x_ elevado a la _y_. Primero, puedes usar el operador `**`:

```raku
say 3 ** 4; # 81
```

Segundo, puedes usar dígitos en superíndice, por ejemplo:

```raku
say 3⁴; # 81
```

Es posible poner más de un dígito en superíndice para obtener el valor de una potencia mayor que 9. Por ejemplo:

```raku
say 2¹⁵; # 32768
```

La potencia negativa tampoco es un problema:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Observa que el resultado de las dos últimas expresiones es un número `Rat`.

## Operaciones con asignación

Todas las operaciones soportan la sintaxis abreviada cuando necesitas actualizar la variable. Vamos a demostrarlo con el ejemplo de `+`.

La forma completa

```raku
$a = $a + $b;
```

es equivalente a:

```raku
$a += $b;
```

{% include nav.html %}