---
title: 'Solution: Un flag de línea de comandos'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Puedes encontrar el código fuente en el archivo [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Salida

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Comentarios

1. Un parámetro con nombre de tipo `Bool` se convierte en una bandera: pasar `--shout` establece `$shout` en `True`, mientras que omitirlo mantiene el valor predeterminado `False`.

1. El operador ternario entonces imprime `HELLO` o `hello` según corresponda. A diferencia de una opción `--name=value`, una bandera no toma un valor — su mera presencia es lo que cuenta.

{% include nav.html %}
