---
title: Más sobre subrutinas MAIN
translations_gpt:
---

{% include menu.html %}

En la parte de Esenciales usaste `MAIN` [para recibir argumentos de la línea de comandos](/es/essentials/the-main-function/reading-command-line-arguments). Raku hace más por ti con `MAIN` que simplemente pasar los valores.

## El mensaje de uso

Si los argumentos en la línea de comandos no coinciden con la firma de `MAIN`, Raku no ejecuta el cuerpo. En su lugar, imprime un _mensaje de uso_ generado automáticamente que describe cómo debe llamarse el programa.

Toma este programa:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Llamado correctamente, saluda a la persona:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Llamado sin argumentos, la firma no coincide, así que Raku imprime el uso en lugar del saludo:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

El mensaje se construye a partir de los nombres de los parámetros, por lo que darles nombres significativos hace que el texto de ayuda sea útil de forma gratuita.

## Argumentos con nombre

Los parámetros de `MAIN` pueden ser con nombre además de posicionales. Un parámetro con nombre se convierte en una opción `--option=value` en la línea de comandos, y un valor predeterminado lo hace opcional:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
