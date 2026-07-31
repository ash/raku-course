---
title: 'Solución: El número de argumentos de línea de comandos'
translations_gpt:
---

{% include menu.html %}

El número de argumentos sigue viniendo de `@*ARGS.elems`, pero esta vez hay que hacer algo con él en lugar de limitarse a imprimirlo. Guarda la cuenta en una variable y elige después la palabra correcta con un operador ternario:

## Código

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Puedes encontrar el código fuente en el archivo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Salida

Vale la pena probar los tres casos interesantes: ningún argumento, exactamente uno y muchos. Solo el segundo usa la forma singular.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}
