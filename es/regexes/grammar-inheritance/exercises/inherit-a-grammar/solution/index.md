---
title: 'Solución: Herede una gramática'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Puedes encontrar el código fuente en el archivo [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Salida

```
True
True
False
```

## Comentarios

1. Tanto `Dog is Animal` como `Cat is Animal` heredan sin cambios el token `TOP` de la base; cada una aporta solo su propio `sound`.

1. Así, una sola gramática base se extiende de dos maneras distintas. `Dog` empareja solo `woof` y `Cat` solo `meow`, y por eso `Dog.parse('meow')` falla: un perro conserva su propio `sound` sobrescrito, exactamente como se comportan los métodos sobrescritos en los objetos.

{% include nav.html %}
