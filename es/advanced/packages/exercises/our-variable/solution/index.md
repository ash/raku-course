---
title: 'Solution: Una variable our'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Puedes encontrar el código fuente en el archivo [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Salida

```
8080
False
```

## Comentarios

1. `our $port` pasa a formar parte del espacio de nombres `Config`, por lo que es accesible desde afuera como `$Config::port`, imprimiendo `8080`.

1. `my $secret` es léxica — privada al bloque del paquete — por lo que no está en el espacio de nombres. La ruta `$Config::secret` no encuentra nada, un valor indefinido, así que `.defined` es `False`. Esta es la diferencia que hace `our`.

{% include nav.html %}
