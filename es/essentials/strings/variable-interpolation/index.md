---
title: Interpolación de variables en cadenas de Raku
---

{% include menu.html %}

¿Ya has notado en las secciones anteriores que a veces las cadenas estaban entrecomilladas con comillas simples, pero otras veces con comillas dobles? La diferencia es crucial.

Por supuesto, puedes usar comillas dobles si deseas poner una comilla simple dentro de la cadena con el mínimo esfuerzo:

```raku
say "O'Henry";
```

Por cierto, es aún mejor usar un apóstrofe adecuado en lugar de una comilla simple ya que [Raku es bueno con Unicode](../../on-unicode).

```raku
say 'O’Henry';
```

Pero el verdadero poder de las comillas dobles es su capacidad para _interpolar_ variables y—como veremos pronto—¡ejecutar código! Examina el siguiente programa:

```raku
my $name = 'Karl';
say "Hello, $name!";
```

Como podrías esperar, el programa imprime `Hello, Karl!`. El nombre de la variable `$name` (junto con su sigil `$`) fue reemplazado por el valor de la variable.

La variable fue interpolada con el valor que la variable tenía en el momento de la interpolación, por lo que si cambias el contenido de `$name` y lo interpolas nuevamente, se sustituirá el nuevo valor. Vamos a probarlo:

```raku
my $name = 'Karl';
say "Hello, $name!";

$name = 'Anna';
say "Hello, $name!";
```

La misma cadena genera diferentes mensajes esta vez:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}