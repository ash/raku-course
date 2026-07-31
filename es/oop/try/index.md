---
title: 'Capturar excepciones con `try`'
translations_gpt:
---

{% include menu.html %}

Cuando algo sale mal en un programa de Raku — un archivo que falta, un `die` explícito — se lanza una _excepción_. Por omisión, una excepción no manejada detiene el programa. El bloque `try` te permite ejecutar código que podría fallar sin que todo se venga abajo.

Envuelves el código arriesgado en un bloque `try`. Si dentro se lanza una excepción, el bloque se detiene ahí, pero el programa continúa:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

El `die` lo captura el `try`, así que el programa no se cae: sigue derecho a la instrucción siguiente e imprime:

```
Still works
```

Cuando el bloque falla así, su valor es un valor no definido, de modo que `$result` no está definido:

```raku
say $result.defined; # False
```

La excepción capturada se guarda en la variable especial `$!`. Desde ahí puedes leer su mensaje:

```raku
say $!.message; # Boom!
```

Así que `try` convierte un error fatal en algo que tu programa puede inspeccionar y a lo que puede reaccionar. Si el bloque se ejecuta sin ninguna excepción, `$result` contiene su valor y `$!` no está definida.

{% include nav.html %}
