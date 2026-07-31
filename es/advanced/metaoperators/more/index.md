---
title: Cross, hyper y negados
translations_gpt:
---

{% include menu.html %}

Además de la reducción y el zip, Raku tiene varios meta-operadores más. Tres de ellos merecen ser mencionados aquí.

## Cross — `X`

El meta-operador cross `X` empareja **cada** elemento de una lista con **cada** elemento de otra, es decir, el producto cartesiano:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Al igual que zip, puede envolver un operador para actuar sobre cada par. `X~` une cada par en una cadena, y `X*` multiplica:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Mientras que zip recorre dos listas en paralelo, cross las combina de todas las formas posibles.

## Hyper — `>>...<<`

Un meta-operador hyper aplica un operador a **cada elemento** de una lista. El operador se envuelve con las flechas `>>...<<` (o en Unicode `>>...<<`). Con dos listas funciona elemento por elemento, como zip; con un único valor en un lado, ese valor se extiende a toda la lista:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

Las dos flechas no tienen que apuntar en la misma dirección, y su orientación decide que ocurre cuando las listas difieren en longitud: una punta que apunta **hacia** una lista permite que esa lista se repita para igualar a la otra. En la notación ASCII `<<`/`>>`, las cuatro combinaciones son:

* `>>op<<` — ninguno de los lados se extiende; las listas deben tener ya la misma longitud, o se produce un error;
* `>>op>>` — la lista **derecha** se repite para igualar a la izquierda;
* `<<op<<` — la lista **izquierda** se repite para igualar a la derecha;
* `<<op>>` — la lista **más corta** se repite para igualar a la más larga.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repeats to 10, 20, 10, 20
```

También existe una forma unaria, que llama a un método en cada elemento. `>>.uc` convierte cada cadena a mayúsculas:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Las operaciones hyper también indican que el trabajo *puede* realizarse en paralelo; más adelante conocerás el método relacionado `.hyper`, en [la sección sobre programación concurrente](/es/paradigms/hyper-race).

## Negado — `!`

Colocar `!` delante de un operador de comparación niega su resultado. El conocido `!=` (no igual) es exactamente este meta-operador aplicado a `==`, y lo mismo funciona para otros operadores booleanos como `eq` y `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — not equal as strings
say 5 !%% 2;     # True  — 5 is not divisible by 2
```

En resumen, `$a !op $b` es simplemente una forma más ordenada de escribir `!($a op $b)`.

Esto es a propósito. A diferencia de un lenguaje deliberadamente minimalista como el Esperanto, que busca una forma regular de expresar cada cosa, Raku esta encantado de ofrecerte varias, por lo que el negado `!eq` convive junto al operador dedicado `ne`, y ambos significan exactamente lo mismo:

```raku
say 'a' ne 'b'; # True — the same test as 'a' !eq 'b'
```

{% include nav.html %}
