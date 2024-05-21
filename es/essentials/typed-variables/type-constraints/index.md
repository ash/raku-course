---
title: Restricciones de tipo
---

{% include menu.html %}

Raku es un lenguaje con el llamado sistema de tipos gradual. En la mayoría de los casos, no necesitas preocuparte por especificar el tipo de la variable. Sin embargo, en algunos casos, puede que desees restringir el tipo de una variable dada, y puedes hacerlo especificando el tipo como se muestra a continuación:

```raku
my Int $var = 42;
```

Ahora, es posible asignar otro valor entero a `$var`, pero un intento de poner una cadena o incluso un número de punto flotante termina con una excepción:

```raku
my Int $var = 42;
$var = '314E-2';
```

Este programa emite el siguiente error:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}