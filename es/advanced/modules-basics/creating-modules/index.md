---
title: Crear módulos
translations_gpt:
---

{% include menu.html %}

A medida que los programas crecen, es útil dividirlos en piezas reutilizables. Un _módulo_ es una unidad de código, guardada en su propio archivo, que otros programas pueden cargar y usar.

Un archivo de módulo tiene la extensión `.rakumod` y comienza nombrando el módulo con `unit module`. Las subrutinas que escribas dentro son privadas por defecto; para hacer que una esté disponible para el código que usa el módulo, márcala con el trait `is export`.

Aquí hay un módulo almacenado en un archivo llamado `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

La subrutina `hello` lleva `is export`, por lo que será visible para cualquier programa que use el módulo. Una subrutina sin `is export` permanecería privada dentro del módulo.

Un módulo también puede compartir datos a través de variables `our`, que se vuelven accesibles a través del nombre del módulo. Agregar un número de versión a `Greeting` es tan simple como una línea más en el archivo:

```raku
our $version = '1.0';
```

Con esa línea en `Greeting.rakumod`, el valor está disponible como `$Greeting::version` en cualquier lugar donde se cargue el módulo.

Los siguientes temas muestran [cómo un programa carga dicho módulo](/es/advanced/modules-basics/using-modules) y qué obtiene exactamente de él.

{% include nav.html %}
