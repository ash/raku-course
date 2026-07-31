---
title: 'Solución: Una gramática que suma'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 Puedes encontrar el código fuente en el archivo [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Salida

```
12
```

## Comentarios

1. `<number>+ % '+'` empareja uno o más números separados por signos `+`; el
modificador `%` describe el separador entre repeticiones.

1. El método de acción se ejecuta cuando `TOP` coincide. `make` adjunta un valor
calculado —la suma de los números—, que `.made` recupera después del análisis.

1. Un `token` nunca se salta espacios, así que esta gramática es estricta con su
entrada: `'3+4+5'` se analiza, pero `'3 + 4 + 5'` no (`.parse` devuelve `Nil`). Para
aceptar espacios alrededor de los signos más, convierte `TOP` en un `rule` y separa el
cuantificador de su átomo:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    En un `rule`, el espacio en blanco del patrón representa una llamada implícita a
`<.ws>`. Escrito como `<number> + % '+'`, con un espacio antes del cuantificador `+`,
ese espacio implícito cubre la repetición entera, separadores incluidos, así que se
analizan tanto `'3+4+5'` como `'3 + 4 + 5'`, y la suma es `12` en ambos casos. (Si
prefieres quedarte con un `token`, deletrea los espacios en el separador:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
