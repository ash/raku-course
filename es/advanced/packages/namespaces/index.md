---
title: Espacios de nombres y our
translations_gpt:
---

{% include menu.html %}

El declarador `our` es lo que hace que algo sea visible en su espacio de nombres. Una variable declarada con `my` es léxica — privada a su bloque — mientras que una declarada con `our` es también una variable de paquete, accesible desde afuera a través de la ruta `::`:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` funciona porque `count` fue declarada con `our`; `$Counter::secret` fallaría, porque `secret` es léxica.

Los espacios de nombres pueden **anidarse**. Un paquete dentro de otro paquete construye una ruta `::` más larga:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

El nombre completo `$Outer::Inner::val` recorre desde el espacio de nombres externo, hacia el interno, hasta la variable. Así es exactamente como está organizada la biblioteca estándar — nombres como `IO::Socket::INET` son espacios de nombres anidados — y cómo un módulo que escribas agrupa sus partes bajo un nombre de nivel superior.

{% include nav.html %}
