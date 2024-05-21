---
title: Comentarios embebidos
---

{% include menu.html %}

Los comentarios embebidos, o en línea, tienen la misma forma que los comentarios de varias líneas con la única diferencia de que los colocas entre otras partes del programa. Por ejemplo:

```raku
my $name;
$name = #`[Se espera entrada del usuario aquí] prompt '¿Cuál es tu nombre? ';
say $name;
```

Un buen resaltador de sintaxis ayuda mucho a visualizar los comentarios.

{% include nav.html %}