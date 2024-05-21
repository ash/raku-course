---
title: La rutina note
---

{% include menu.html %}

La rutina `note` imprime sus argumentos en el flujo de errores estándar. En el resto, es similar a [`say`](../say).

1. Llama al método `gist` en sus argumentos.
1. Añade un carácter de nueva línea.
1. Convierte el resultado a UTF-8.
1. Lo envía al flujo `STDERR`.

```raku
my $x = 42;
note "El valor actual de \$x es $x";
```

Confirma que este programa no envía el mensaje a `STDOUT`:

```
$ raku t.raku > /dev/null
El valor actual de $x es 42
```

Si no se pasa ningún argumento a `note`, imprime `Noted` como mensaje predeterminado.

{% include nav.html %}