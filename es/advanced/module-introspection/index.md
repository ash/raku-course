---
title: Introspección de módulos
---

{% include menu.html %}

El nombre de un módulo introduce un _paquete_ — un espacio de nombres que contiene los nombres definidos en el. Anteriormente, en [la sección sobre contenedores](/es/advanced/containers), conociste `WHO`, que devuelve el `Stash` (la tabla de símbolos) de un paquete. La introspección de módulos aprovecha eso.

Los ejemplos a continuación usan el módulo `Greeting` construido en los temas anteriores — una subrutina exportada y una variable compartida `our`:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

El paquete de un módulo se escribe con `::` al final. Agregar `.keys` lista los nombres que contiene:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

El módulo `Greeting` de los temas anteriores define una variable `our`, `$version`, así que su paquete contiene ese nombre — con el sigilo incluido. A su lado esta `EXPORT`, que puede parecer sorprendente. Es un paquete que Raku crea automáticamente para contener todo lo que un módulo marca como `is export`, como la subrutina `hello`. Un nombre exportado, por lo tanto, _no_ aparece directamente en el paquete; vive dentro de ese sub-paquete `EXPORT`. (Las claves se devuelven sin un orden fijo, así que el ejemplo las ordena para obtener un resultado estable.)

También puedes buscar un nombre en el paquete usandolo como clave. Esto accede al mismo valor que el calificado `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Listar lo que exporta un módulo

El paquete `EXPORT` visto arriba es donde realmente viven los nombres exportados, así que puedes listarlos mirando un nivel más profundo. Las exportaciones sin etiqueta van al grupo `DEFAULT` (consulta [Etiquetas de exportación](/es/advanced/modules-basics/export-tags)), y sus `.keys` son las rutinas exportadas:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Cada clave es un nombre exportado con su sigilo — aquí la única subrutina `&hello`, mostrada con el `&` que marca una rutina. Así es como descubres lo que un módulo pone a disposición de sus usuarios sin leer su código fuente: preguntale a su paquete `EXPORT::DEFAULT` que contiene.

Introspeccionar un paquete de esta manera es útil cuando quieres descubrir lo que un módulo proporciona, o para acceder a sus nombres dinamicamente en lugar de escribir cada uno en el código fuente.

{% include nav.html %}
