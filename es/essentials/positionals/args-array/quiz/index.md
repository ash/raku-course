---
title: Quiz — El array @*ARGS
---

{% include menu.html %}

Estás ejecutando el siguiente programa varias veces. Para cada ejecución, encuentra las respuestas correctas.

El programa está guardado en el archivo `t.raku` y tiene el siguiente código:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

El programa se ejecuta como:

```console
$ raku t.raku hello world
```

¿Cuáles son los valores impresos por cada una de las líneas de código?

{:.quiz-select}
2 | `say @*ARGS.elems;` imprime&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` imprime&nbsp; (: hello, world, hello world :)

## 2

El programa se ejecuta como:

```console
$ raku t.raku "hello world"
```

¿Cuáles son los valores impresos?

{:.quiz-select}
1 | `say @*ARGS.elems;` imprime&nbsp; (: 1, 2 :) | La cadena entre comillas es un solo argumento.
hello world | `say @*ARGS[0];` imprime&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

El programa se ejecuta como:

```console
$ raku t.raku "hello" "world"
```

¿Qué imprime?

{:.quiz-select}
2 | `say @*ARGS.elems;` imprime&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` imprime&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Las comillas del shell no se incluyen en el valor del argumento.


{% include quiz.html %}

{% include nav.html %}