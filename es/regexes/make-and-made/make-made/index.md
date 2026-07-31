---
title: make y made
translations_gpt:
---

{% include menu.html %}

En lugar de sacar los valores del árbol después, puedes adjuntar un valor a una coincidencia **mientras** se analiza. Dentro del cuerpo de un token puedes incrustar un _bloque de código_ — un `{ … }` interior escrito entre el patrón — que se ejecuta en cuanto el emparejamiento lo alcanza. Dentro de ese bloque, la función `make` guarda un valor en la coincidencia actual:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Cuando `TOP` coincide, el bloque interior `{ make $<number>.Int }` se ejecuta — las llaves exteriores son solo el cuerpo del token — y guarda el entero en la coincidencia. Lo lees después con `made` (o con su alias `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Como guardamos `$<number>.Int`, el valor que devuelve `made` es un `Int` de verdad: el número en sí, no el objeto de coincidencia:

```raku
say OneNum.parse('42').made + 1; # 43
```

Fíjate en que este `+ 1` en concreto daría `43` incluso sin el `.Int`, ya que una coincidencia se convierte en número a partir de sus dígitos en aritmética. El sentido de llamar a `.Int` es que el valor *guardado* **sea** de verdad un número, que es lo que quieres una vez que acaba en una estructura de datos o se pasa a otra parte, en lugar de la coincidencia en bruto.

El valor guardado puede ser cualquier cosa: un número, una cadena, un array, un objeto. Un token también puede combinar los valores producidos por sus subtokens. Por ejemplo, sumando dos números capturados:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` y `made` son el puente entre «coincidió» y «aquí está el significado». Poner los bloques en línea funciona, pero mezcla el patrón con la lógica; la sección siguiente traslada esa lógica a una [_clase de acciones_](/es/regexes/action-classes) aparte.

{% include nav.html %}
