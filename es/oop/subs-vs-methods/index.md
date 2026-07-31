---
title: Subrutinas y métodos
translations_gpt:
---

{% include menu.html %}

Ya tienes dos maneras de empaquetar un comportamiento: una _subrutina_ y un _método_. Se parecen, pero se usan de forma distinta.

Una subrutina se sostiene sola. La llamas por su nombre y le pasas como argumentos todo lo que necesita:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Un método pertenece a una clase y se llama sobre un objeto con el punto. Puede usar los datos del propio objeto a través de `self` y de los accesores de los atributos, así que esos datos no se los pasas:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Ambos calculan el mismo número. La diferencia está en de dónde vienen los datos: la subrutina recibe el radio como argumento, mientras que el método lo lee del objeto sobre el que se llamó.

Como regla práctica, usa una subrutina para una operación aislada que se limite a transformar sus argumentos, y un método cuando el comportamiento pertenezca naturalmente a un objeto y trabaje con el estado de ese objeto. Para rutinas propias de la clase pero genéricas, usa métodos de clase.

{% include nav.html %}
