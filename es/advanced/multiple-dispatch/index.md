---
title: Despacho múltiple
translations_gpt:
---

{% include menu.html %}

En la parte de Esenciales conociste las [_multi-funciones_](/es/essentials/more-on-functions/multi-functions): varias subrutinas que comparten un nombre, donde Raku elige la correcta observando los tipos de los argumentos. Este mecanismo se llama _despacho múltiple_.

Hasta ahora, la elección se hacía por el _tipo_ de los argumentos. Una cláusula `where` te permite ir más allá y despachar también por el _valor_. Se escribe después de un parámetro y contiene una condición que el argumento debe satisfacer para que ese candidato sea elegido:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Cada llamada va al candidato cuya condición es verdadera para el valor dado:

```
-5 is negative
0 is zero
7 is positive
```

Los tres candidatos tienen la misma firma en cuanto a tipos — un único `Int` — así que sin las cláusulas `where` entrarían en conflicto. Las condiciones los hacen distintos.

## Un caso base para la recursión

Un uso común de `where` es proporcionar el punto de parada de una recursión como un candidato separado. Aquí está el factorial de nuevo, dividido en dos multi-subs:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

El primer candidato maneja el caso base (`$n` de `1` o menos) y simplemente devuelve `1`. Cualquier otro valor va al segundo candidato, que llama a `fact` de nuevo con un número más pequeño. No hay ningún `if` dentro de la función — la elección entre el caso base y el paso recursivo la hace el despachador.

{% include nav.html %}
