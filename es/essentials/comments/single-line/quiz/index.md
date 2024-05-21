---
title: 'Cuestionario: Comentarios de una sola línea'
---

{% include menu.html %}

Selecciona las líneas con comentarios correctos. No te preocupes si aún no entiendes el código Raku.

{:.quiz}
1 | `my $name = 'John'; # Estableciendo el nombre`
1 | `my $age = 23; ## Cambiarlo el próximo año` | Todo después del primer `#` es un comentario.
0 | `say $name; Imprimiendo nombre` | Un comentario debe comenzar con un `#`.
0 | `my $city = 'TBA'; // Aún no conocido` | Los comentarios al estilo de C++ no son reconocidos en Raku.
1 | `# say $age;` | Toda la línea ha sido comentada.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}