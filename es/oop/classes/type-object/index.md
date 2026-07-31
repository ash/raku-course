---
title: Objetos de tipo e instancias
translations_gpt:
---

{% include menu.html %}

Cuando escribes el nombre de una clase como `Dog`, te estás refiriendo al _objeto de tipo_ de la clase. El objeto de tipo representa el tipo en sí, no un objeto concreto de ese tipo. Una _instancia_, creada con `new`, es un objeto de verdad.

Raku distingue ambos. El método `defined` devuelve `False` para un objeto de tipo y `True` para una instancia:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Un objeto de tipo se considera _no definido_ porque no contiene datos concretos: es solo la descripción de un tipo. Una instancia sí está _definida_: es un objeto de verdad.

Ambos informan del mismo tipo a través de `WHAT`, que conociste en la [sección sobre contenedores](/es/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

Los paréntesis alrededor de `(Dog)` son la forma que tiene Raku de mostrar un tipo. Así que `Dog` y `Dog.new` comparten el tipo `Dog`; la diferencia es que uno es el tipo mismo y el otro un objeto de ese tipo.

{% include nav.html %}
