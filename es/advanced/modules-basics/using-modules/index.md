---
title: Usar módulos
translations_gpt:
---

{% include menu.html %}

Para usar un módulo, cárgalo con la instrucción `use`. Después de eso, los nombres que el módulo exporta están disponibles como si los hubieras escrito tú mismo.

Dado el archivo `Greeting.rakumod` del tema anterior, un programa lo usa así:

```raku
use Greeting;

say hello('Anna');
```

Debido a que `hello` fue marcada con `is export`, la instrucción `use` la pone a disposición, y el programa la llama directamente:

```
Hello, Anna!
```

Para que Raku encuentre el módulo, este debe estar en la ruta de búsqueda de módulos. Cuando el archivo del módulo está en el mismo directorio que tu programa, le dices a Raku que busque ahí con la opción `-I.` (el punto significa "el directorio actual"):

```console
$ raku -I. program.raku
Hello, Anna!
```

Los módulos instalados (cubiertos más adelante en [Instalar módulos desde la web](/es/advanced/installing-modules)) se encuentran automáticamente, por lo que la opción `-I` solo es necesaria para módulos que están junto a tu propio programa.

{% include nav.html %}
