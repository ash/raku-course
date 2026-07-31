---
title: Importar
translations_gpt:
---

{% include menu.html %}

Hay más de una forma de incorporar un módulo a un programa. Las tres instrucciones `use`, `need` y `require` difieren en _cuándo_ se carga el módulo y en _qué_ pone a disposición.

## `use`

Ya conoces `use`. Carga el módulo en tiempo de compilación e importa sus nombres exportados, para que puedan llamarse directamente:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` también carga el módulo en tiempo de compilación, pero _no_ importa los nombres exportados. Aun así, puedes acceder a las variables `our` del módulo a través del nombre del módulo:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Después de `need Greeting`, un simple `hello(...)` no sería reconocido, porque no se importó nada — solo los nombres calificados, como `$Greeting::version`, están disponibles.

## `require`

`require` carga el módulo en _tiempo de ejecución_ en lugar de en tiempo de compilación. Esto es útil cuando no sabes hasta que el programa se ejecuta si un módulo será necesario, por ejemplo cuando su nombre lo decide la entrada del usuario.

Dado que la carga ocurre en tiempo de ejecución, nada se importa automáticamente. Listar los símbolos que deseas entre corchetes angulares después del nombre los incorpora, para que puedan llamarse directamente:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Para el uso cotidiano, `use` es lo que necesitas; `need` y `require` están ahí para los casos menos comunes.

{% include nav.html %}
