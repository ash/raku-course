---
title: Quiz — Leer argumentos de línea de comandos en la función MAIN
---

{% include menu.html %}

Aquí está el programa:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

¿Qué imprime si se ejecuta como se muestra a continuación?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Introduce el resultado esperado: ␣␣␣␣␣␣␣

## 2

¿Qué imprime ahora?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Introduce el resultado esperado: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}