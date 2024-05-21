---
title: Longitud de cadena en Raku
---

{% include menu.html %}

La naturaleza Unicode de las cadenas hace que algunas cosas triviales sean un poco más difíciles. O, al menos, necesitas pensar en ello como un tema menos directo. Tomemos, por ejemplo, la longitud de una cadena. ¿Es el número de caracteres o es el número de bytes? ¿O qué pasa si el mismo carácter se descompone de manera diferente en diferentes cadenas, sigue siendo un solo carácter?

## Longitud en caracteres

Para obtener la longitud de la cadena en caracteres, usa el _método_ `chars`:

```raku
my $str = '你好世界';
say $str.chars;
```

Aunque hablaremos de métodos más adelante, ya deberíamos ser capaces de usarlos. En Raku, puedes llamar métodos en casi cualquier objeto, incluidas las cadenas y las variables escalares. Para llamar a un método, usa un punto. Así que, aquí vemos el método llamado en una variable que contiene una cadena: `$str.chars`.

Hay cuatro caracteres en este saludo chino 你好世界. Y `$str.chars` devuelve exactamente `4`.

## Longitud en bytes

Solo como referencia, así es como obtienes la longitud de la cadena en bytes. En este caso, es importante saber qué codificación se usa para mantener la cadena:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Esta vez, el programa imprime `12`. Nota que tenemos dos llamadas de métodos encadenadas en la segunda línea aquí.

## Longitud en puntos de código

Solo por completitud, aquí hay otro método útil que también se relaciona con la longitud de las cadenas: `codes`. Devuelve el número de puntos de código en la cadena después de ser normalizada. En muchos casos, `codes` y `chars` devuelven lo mismo. Aún así, en algunos casos raros, cuando, por ejemplo, construyes 'un carácter imposible', para el cual no hay un solo punto de código en todo el espacio Unicode, los métodos dan resultados diferentes.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Este carácter, `x̨`, no tiene un punto de código dedicado y solo puede construirse a partir de las dos partes: la letra minúscula `x` y el carácter combinante `0x0328`. Entonces, todavía hay un carácter pero dos puntos de código. Así que, el programa imprime:

    1
    2

{% include nav.html %}