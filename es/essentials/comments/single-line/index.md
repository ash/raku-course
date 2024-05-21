---
title: Comentarios de una sola línea
---

{% include menu.html %}

La forma más simple de un comentario es un comentario de una sola línea. Comienza con el carácter `#` y continúa hasta el final de la línea actual.

```raku
my $name; # Esta variable se usa para guardar el nombre del usuario
$name = prompt '¿Cuál es tu nombre? ';
say $name; # Ahora vemos el nombre
```

Nota que un shebang como `#!/usr/bin/env raku` en la primera línea de código también es un comentario para Raku, aunque puede ser leído y ejecutado por el shell.

{% include nav.html %}