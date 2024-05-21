---
title: La rutina say
---

{% include menu.html %}

La rutina incorporada `say` realiza las siguientes acciones:

1. Llama al método `gist` en sus argumentos.
1. Añade un carácter de nueva línea.
1. Convierte el resultado a UTF-8.
1. Lo envía al flujo `STDOUT`.

Desde la perspectiva del usuario, `say` simplemente imprime el contenido de una variable en la terminal y añade la nueva línea.

El primer paso requiere algunas explicaciones. El método `gist` es un método que está definido para cada tipo de dato incorporado, como enteros o cadenas. Para estos tipos simples, el resultado devuelto es un valor legible por humanos que representa el elemento.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Para datos más complejos, como arreglos o hashes, el método `gist` añade algo de formato.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

La rutina `say` puede ser llamada tanto como una función o un método:

```raku
say 42;
say(42);
42.say;
```

Puedes pasar más de un argumento a `say`. Las piezas de salida se unen sin espacios entre ellas.

```raku
say(100, 500); # 100500
```

{% include nav.html %}