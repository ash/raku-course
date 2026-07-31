---
title: Metamétodos
translations_gpt:
---

{% include menu.html %}

Un _metamétodo_ se llama con `.^` en lugar de con `.`. El `.method` ordinario ejecuta un método del objeto; el `.^method` llama a un método sobre el **metaobjeto** del objeto: pregunta algo sobre el tipo en lugar de actuar como el tipo.

Ya conoces `.^name`, que devuelve el nombre del tipo:

```raku
say 42.^name; # Int
```

Otros metamétodos inspeccionan la estructura de un tipo. `.^attributes` enumera sus atributos y `.^find_method` te dice si un método existe:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` devuelve el _method resolution order_: la cadena de tipos que Raku recorre, en orden, al buscar un método. Es la línea de herencia de una clase:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` hereda de `A`, y todo tipo en última instancia de `Any` y `Mu`, así que una llamada a un método sobre un `B` se busca exactamente por ese camino. Estos metamétodos convierten la estructura de tus tipos en datos que puedes consultar en tiempo de ejecución.

{% include nav.html %}
