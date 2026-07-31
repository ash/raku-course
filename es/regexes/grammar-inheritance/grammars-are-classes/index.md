---
title: Las gramáticas son clases
translations_gpt:
---

{% include menu.html %}

Cuando escribes `grammar`, Raku crea algo muy parecido a una clase. Los tokens son métodos suyos, y se aplica toda la maquinaria de la [herencia](/es/oop/inheritance) de la parte sobre objetos. Así que una gramática puede extender a otra con `is`, igual que una subclase:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` hereda `TOP` de `Base` pero aporta su propio `greeting`. Cuando `Loud` analiza, su `TOP` llama a `<greeting>`, y se usa el token sobrescrito de `Loud`, exactamente como funciona un método sobrescrito en los objetos.

Esto hace componibles a las gramáticas. Puedes escribir una gramática general para un formato y derivar después una versión especializada que cambie solo los tokens que difieren, sin copiar el resto.

Incluso el `.parse` que no dejas de llamar viene de esta naturaleza de clase: toda gramática hereda automáticamente de un tipo base incorporado llamado `Grammar`, que aporta `.parse` (y su primo de coincidencia parcial, `.subparse`). Nunca lo escribes tú: te llega gratis, igual que una clase ordinaria hereda métodos de su padre.

{% include nav.html %}
