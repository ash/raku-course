---
title: Definir un enum
translations_gpt:
---

{% include menu.html %}

Declara un enum con la palabra clave `enum`, un nombre y la lista de nombres de constantes:

```raku
enum Colour <red green blue>;
```

Esto crea un nuevo tipo, `Colour`, y tres constantes: `red`, `green` y `blue`. Puedes usar las constantes directamente por su nombre:

```raku
say red;   # red
say green; # green
```

Detrás de cada nombre hay un número, asignado automáticamente desde cero en el orden en que los listaste: `red` es `0`, `green` es `1`, `blue` es `2`. Como los valores están ordenados, puedes comparar las constantes:

```raku
say red < blue; # True
```

Una variable puede tener el tipo del enum, de modo que solo acepte esas constantes:

```raku
my Colour $c = green;
say $c; # green
```

Si un nombre pudiera entrar en conflicto con algo más en tu programa, siempre puedes referirte a una constante a través del nombre del enum con `::`:

```raku
say Colour::red; # red
```

Un enum le da a un conjunto de constantes relacionadas un nombre y un tipo, lo que hace que el código que las utiliza sea mucho más claro que usar números sueltos. El siguiente tema trata sobre [los números detrás de los nombres](/es/advanced/enumerations/values-and-keys).

{% include nav.html %}
