---
title: Pragmas
translations_gpt:
---

{% include menu.html %}

Una _pragma_ se parece a un módulo cargado con `use`, pero en lugar de incorporar código, cambia una regla de compilación para el resto del ámbito actual. Se activa con `use` y (cuando tiene sentido) se desactiva con `no`.

La pragma más importante, `strict`, está **activada por defecto** en Raku: requiere que cada variable sea declarada antes de usarse, razón por la cual un error tipográfico en el nombre de una variable se detecta en lugar de crear silenciosamente una nueva variable.

Desactivar `strict` con `no strict` elimina ese requisito, de modo que puedes asignar a una variable que nunca fue declarada con `my`:

```raku
no strict;

$x = 42;
say $x; # 42
```

Con la pragma `strict` activada por defecto, ese `$x = 42` sin declarar sería un error en tiempo de compilación — *Variable '$x' is not declared*. La línea `no strict` relaja la regla para el resto del ámbito que la contiene.

Otras pragmas incluyen `fatal` (que convierte un fallo silencioso en una excepción lanzada — útil una vez que hayas conocido el manejo de excepciones), `isms` (para permitir expresiones idiomáticas tomadas de otros lenguajes), y `variables` (para ajustar las reglas de variables). El efecto de una pragma es _léxico_ — dura solo hasta el final del bloque en el que aparece — así que puedes endurecer o relajar una regla exactamente en la región de código donde lo desees.

Una pragma acepta un argumento: `lib` agrega un directorio a la lista que Raku consulta al cargar módulos — el equivalente en programa de la opción de línea de comandos `-I`:

```raku
use lib 'lib';
```

La utilizarás cuando empieces a escribir y cargar tus propios [módulos](/es/advanced/modules-basics/using-modules).

{% include nav.html %}
