---
title: Introspección de objetos
translations_gpt:
---

{% include menu.html %}

En la [sección sobre contenedores](/es/advanced/containers) usaste `.^name` para preguntarle a un valor por su tipo. Esas mismas metallamadas `.^` te permiten inspeccionar una clase y sus objetos: sus nombres, sus atributos y su lugar en una jerarquía.

El metamétodo `.^name` devuelve el nombre de la clase:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

El metamétodo `.^attributes` enumera los atributos de la clase. Cada uno se muestra con su tipo y su nombre privado interno (la forma `$!` que conociste con los [atributos privados](/es/oop/methods/private-attributes)):

```raku
say Dog.^attributes; # (Str $!name)
```

La introspección es útil para las herramientas que trabajan con objetos de forma genérica, por ejemplo para imprimir todos los atributos de un objeto sin conocer de antemano su clase. El tema siguiente examina cómo ver la cadena de herencia de una clase.

{% include nav.html %}
