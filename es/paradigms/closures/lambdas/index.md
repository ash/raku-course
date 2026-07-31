---
title: Lambdas
translations_gpt:
---

{% include menu.html %}

Una _lambda_ es una función sin nombre. Ya has conocido dos formas de escribir una. La primera es el **[bloque con flecha](/es/advanced/anonymous-subroutines)**, que enumera sus parámetros tras la flecha `->`:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

La segunda es la forma **[Whatever](/es/advanced/whatever)**, donde un `*` ocupa el lugar del argumento y la expresión que lo rodea se convierte en una función de un argumento:

```raku
my &square = * ** 2;
say square(7); # 49
```

Ambas crean la misma clase de cosa: un fragmento de código que puedes guardar, pasar y llamar. Las lambdas brillan como argumentos de las funciones de orden superior, donde ponerles nombre solo estorbaría:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

La forma con flecha es más clara cuando el cuerpo es más largo o recibe varios parámetros; la forma Whatever es maravillosamente breve para expresiones sencillas. Son dos grafías de la misma idea: una función sin nombre.

{% include nav.html %}
