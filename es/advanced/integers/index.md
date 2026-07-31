---
title: Enteros
---

{% include menu.html %}

Has utilizado enteros desde el inicio del curso. Esta sección examina algunas de sus características menos evidentes.

La más importante es que los enteros en Raku tienen _precisión arbitraria_: no están limitados a un número fijo de bytes, y nunca desbordan silenciosamente. Mientras haya suficiente memoria, un entero puede crecer tanto como necesites:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Este es un valor exacto, no una aproximación. Lo mismo ocurre con los productos de números grandes: el factorial de 50, por ejemplo, se calcula de forma exacta:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Para facilitar la lectura de números largos en el código fuente, puedes agrupar los dígitos con guiones bajos. El compilador los ignora:

```raku
say 1_000_000; # 1000000
```

Los siguientes temas muestran cómo escribir enteros en otras bases numéricas e introducen algunos métodos útiles para enteros.

{% include nav.html %}
