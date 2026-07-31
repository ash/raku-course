---
title: Atributos privados
translations_gpt:
---

{% include menu.html %}

En la [sección sobre atributos](/es/oop/attributes) cada atributo se declaraba con `$.`, lo que crea un accesor público. Un atributo declarado con `$!`, en cambio, es _privado_: no tiene accesor y no se ve desde fuera del objeto. Solo es accesible desde los propios métodos de la clase, donde te refieres a él como `$!name`.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

El secreto `$!code` se guarda dentro del objeto pero nunca se expone: no hay accesor `.code`, así que la única manera de interactuar con él es el método `unlocks` que la clase decide ofrecer. Un intento de leer `$safe.code` o `$safe!code` simplemente falla.

Los atributos privados son útiles para los detalles internos que el resto del programa no debería tocar directamente.

{% include nav.html %}
