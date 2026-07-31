---
title: La cadena de herencia
translations_gpt:
---

{% include menu.html %}

Cuando una clase hereda de otra, puedes pedir la cadena completa de tipos sobre la que está construida. El metamétodo `.^mro` devuelve esa cadena; el nombre viene de _method resolution order_, el orden en que Raku busca un método.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Leyendo de izquierda a derecha: un `Dog` es primero él mismo, después un `Animal` (su padre) y después `Any` y `Mu`, los dos tipos de los que hereda todo objeto de Raku en la cúspide. Cuando llamas a un método sobre un `Dog`, Raku recorre esta lista de izquierda a derecha y usa el primer método que encuentra. Esa es exactamente la razón de que el método de una hija sobrescriba el del padre: la hija aparece antes en la cadena.

Para una clase sin padre explícito la cadena es más corta: solo la clase misma, seguida de `Any` y `Mu`.

{% include nav.html %}
