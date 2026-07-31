---
title: 'Solución: Valide identificadores'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Salida

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Comentarios

1. Los anclajes `^` y `$` obligan al patrón a cubrir la cadena *entera*, así que un
solo carácter descarriado como el guion de `my-var` la hace inválida.

1. La primera clase de caracteres permite una letra o un guion bajo; la segunda,
repetida con `*`, permite además dígitos, correspondiéndose exactamente con la regla
clásica de identificador.

1. La segunda clase también se puede escribir como `\w`, la abreviatura integrada para
un carácter de palabra (una letra, un dígito o un guion bajo):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Una diferencia que conviene tener en cuenta: en Raku, `\w` es consciente de Unicode,
así que un nombre como `café` también pasa, lo que casualmente coincide con el propio
Raku, donde `my $café = 1;` es perfectamente legal. La clase deletreada
`<[A..Za..z0..9_]>` mantiene la comprobación estrictamente en ASCII.

1. Hay un giro, sin embargo: ¡en el propio Raku `my-var` *sí* es un identificador
válido! Raku permite un guion (o un apóstrofo, como en `isn't`) dentro de un nombre,
siempre que le siga una letra, y por eso subrutinas como `is-prime` se leen con tanta
naturalidad. Para validar identificadores *de Raku*, permite esos grupos después de la
parte clásica:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Cada grupo entre corchetes `[ '-' <[A..Za..z]> \w* ]` acepta un guion solo cuando le
sigue una letra, así que `my-var` se informa ahora como válido, mientras que `2fast` —y
cadenas como `a-` o `a-1`— siguen sin serlo.

{% include nav.html %}
