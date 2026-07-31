---
title: Recursión con subrutinas multi
translations_gpt:
---

{% include menu.html %}

Hasta ahora el caso base ha sido una línea _dentro_ de la subrutina: un ternario o un `return` anticipado que comprueba el argumento. Raku ofrece una forma más expresiva de escribir lo mismo. Como una subrutina puede tener varios candidatos `multi`, puedes darle al caso base y al paso recursivo **subrutinas separadas propias** y dejar que el despacho múltiple elija la adecuada en cada llamada.

Recuerda el factorial. Con `multi`, sus dos casos se convierten en dos subrutinas:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

El primer candidato coincide solo cuando el argumento es exactamente `0`: ese literal de la firma _es_ el caso base. Cualquier otra llamada va al segundo candidato, que multiplica y recurre. Cuando `fact($n - 1)` llega por fin a `0`, el despacho cambia al primer candidato y la cadena de llamadas se desenrolla. El caso base ya no es una rama enterrada en el cuerpo; es una subrutina que existe para un solo valor.

¿Por qué `0` y no `1`? Porque cada paso resta uno, cualquier número de partida acaba aterrizando exactamente en `0`, y `0!` está definido como `1`, así que `0` es donde termina de verdad el descenso. Un candidato literal coincide con un único valor *exacto*, de modo que una base `multi fact(1)` calcularía correctamente `fact(1)` pero dejaría que `fact(0)` cayera en `multi fact($n)` y recurriera más allá de cero para siempre. Detenerse en `0` mantiene correcta la subrutina para todo número entero no negativo, `fact(0)` incluido.

Esto se lee especialmente bien cuando hay más de un caso base. Fibonacci necesita dos:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Cada caso base es su propio candidato de una línea, y el candidato recursivo se ocupa de todo lo demás, sin condicionales anidados.

Un literal como `0` coincide solo con ese valor exacto. Cuando el caso base cubre un _rango_ — «`$n` es `1` o menos» —, usa en su lugar una restricción `where`:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

El candidato restringido es más específico, así que Raku lo prueba primero; el candidato simple `$n` recoge todo lo demás.

Sigue valiendo la misma disciplina de antes: todo camino recursivo debe alcanzar un candidato de caso base. El factorial con el literal `0`, por ejemplo, solo es seguro para números enteros no negativos: `fact(-1)` pasaría de largo `0` y recurriría para siempre, porque ningún candidato coincidiría nunca. Repartir los casos entre subrutinas `multi` no elimina la necesidad de un caso base; solo le da un nombre y una casa propia.

{% include nav.html %}
