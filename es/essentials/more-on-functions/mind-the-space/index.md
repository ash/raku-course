---
title: Mind the space
---

{% include menu.html %}

Usar funciones en Raku es mayormente intuitivo y no causa problemas, pero debes estar advertido sobre el siguiente aspecto.

## TL;DR

No agregues un espacio entre el nombre de la función y los paréntesis con sus argumentos. Pero usa un espacio después de `for` y `if`.

## Historia larga

Tomemos una función simple:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Primero, nota la ausencia de espacios entre el nombre de la función y el paréntesis de apertura que contiene los parámetros. Algunos estilos de codificación en otros lenguajes pueden requerir un espacio allí. Raku está bien con eso, pero no es una práctica a seguir:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

En el lado de la llamada, la ausencia de espacio es importante. Si llamas a la función y omites los paréntesis, entonces el espacio después del nombre de la función es inevitable:

```raku
f 5, 6;
```

Pero si agregas paréntesis, no puedes tener un espacio antes de ellos. Esta es una llamada correcta:

```raku
f(5, 6);
```

Y esta llamada es incorrecta:

```raku
f (5, 6);
```

Dicho código causa una excepción:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku ve la llamada con un espacio `f (5, 6)` como un intento de pasar un solo argumento `(5, 6)` a la función. Puedes comprobar fácilmente el tipo de este argumento si reescribes la función para aceptar solo un argumento:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Entonces, llamar a `f (5, 6)` significa que estamos pasando una [lista](/es/essentials/positionals/lists) a la función. La lista como una entidad única.

## Cuando se necesita espacio

En algunos casos, el carácter de espacio es necesario. Eso sucede cuando usas paréntesis con una de las palabras clave, como `if` o `for` o `loop`. El siguiente código es incorrecto:

```raku
if(True != False) {
    say 'OK';
}
```

El mensaje de error explica qué está mal:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

En el caso de `if`, los paréntesis no son necesarios en absoluto, por lo que el problema no tiene posibilidades de aparecer si no los usas. Pero en algunos casos, como, por ejemplo, con `loop`, necesitas tenerlos, y el espacio se vuelve obligatorio:

```raku
loop(my $c = 0; $c != 10; $c++) { say $c }
```

En este código, sucede lo mismo: `loop(...)` es entendido por el compilador como una llamada a función. Agrega un espacio para resolver el problema. O mejor reescribe el fragmento usando `for`.

## Conclusión

En resumen: para evitar tales problemas, no agregues un espacio entre el nombre de la función y los paréntesis con los argumentos de la función y trata de evitar paréntesis si es posible con otras construcciones del lenguaje como el control de flujo.

{% include nav.html %}