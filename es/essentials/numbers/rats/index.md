---
title: Números racionales en Raku
---

{% include menu.html %}

Los números racionales son una característica única de Raku. El tipo de dato `Rat` representa tales números.

Internamente, los números racionales son fracciones con dos partes enteras: numerador y denominador. Así, puedes presentar fácilmente números como 1/3 sin perder precisión.

Hay algunas formas de escribir un número `Rat` en un programa en Raku:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Observa que la barra aquí es parte de la notación. No es un operador de división, por lo que `1/2` no significa que divides 1 entre 2. Sin embargo, al imprimir, los racionales se muestran como números decimales o enteros:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

La parte de la línea después del símbolo `#` es un comentario y es ignorada por el compilador. Tales comentarios se usarán en el curso para mostrar la salida del programa.

## Forma decimal

Es importante darse cuenta de que cuando escribes el número en forma decimal, por ejemplo, `0.5`, Raku crea un número `Rat` en ese punto. No es un entero, pero tampoco es un número de punto flotante (`float` o `double` en otros lenguajes). ¡Sigue siendo un número racional!

Considera el siguiente ejemplo:

```raku
say 0.1 + 0.2 - 0.3;
```

Si un lenguaje de programación usa aritmética de punto flotante para estos cálculos, el resultado no será igual a 0. El sitio web [0.30000000000000004.com](https://0.30000000000000004.com) ofrece una lista exhaustiva de ejemplos donde la aritmética de punto flotante no da un resultado esperado.

Pero Raku imprime exactamente `0`. Esto ocurre porque trata los números `0.1`, `0.2` y `0.3` como números racionales y los mantiene como `1/10`, `2/10` y `3/10` internamente. Ejecútalo desde la línea de comandos para confirmarlo:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Formas Unicode

También es posible usar caracteres Unicode que representan las fracciones, como `½` o `¼` o `¾`. Probablemente, no siempre es fácil escribirlo con el teclado, pero estas fracciones son exactamente los mismos valores que sus versiones ASCII escritas como fracción o como número decimal:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Con algunas fracciones, como `1/3`, tienes menos opciones, `⅓` o `<1/3>`, ya que la forma decimal requeriría un número infinito de dígitos.

{% include nav.html %}