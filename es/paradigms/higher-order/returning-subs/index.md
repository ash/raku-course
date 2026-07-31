---
title: Devolver subrutinas
translations_gpt:
---

{% include menu.html %}

Una subrutina también puede **devolver** una subrutina. Esto te permite construir funciones nuevas sobre la marcha, a medida de los argumentos que le des:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` construye y devuelve una subrutina anónima que suma `5` a su argumento. La guardamos en `&add5` y la llamamos como a cualquier otra subrutina. Llamar a `adder(10)` daría un sumador distinto que suma diez.

Fíjate en que la subrutina devuelta recuerda el valor de `$n` de la llamada que la creó: `add5` conserva su `5` incluso después de que `adder` haya terminado. A una subrutina que captura valores del ámbito donde se creó se la llama [_clausura_](/es/paradigms/closures), el tema de la sección siguiente.

Devolver funciones es una forma compacta de producir familias de operaciones emparentadas sin repetirte: una sola definición de `adder` genera un número ilimitado de sumadores concretos.

{% include nav.html %}
