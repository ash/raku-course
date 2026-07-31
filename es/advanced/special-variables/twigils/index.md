---
title: Twigils
---

{% include menu.html %}

Un _twigil_ es un carácter que se coloca entre el sigilo y el nombre de una variable. No cambia el nombre; cambia cómo se comporta y se resuelve la variable. Los más comunes son:

* `*` — una variable **dinámica**, p. ej. `$*OUT`, buscada a través de la pila de llamadas
* `?` — un valor de **tiempo de compilación** proporcionado por el compilador, p. ej. `$?FILE`, `$?LINE`
* `!` — un atributo **privado** de un objeto, p. ej. `$!balance`
* `.` — un atributo al que se accede a través de su método accesor, p. ej. `$.name`

Ya has encontrado varios de estos sin nombrar el twigil: `$*OUT` y `$*IN` (dinámicos), y `$!`/`$.` en [la parte sobre objetos](/es/oop).

Las variables `?` proporcionadas por el compilador se rellenan mientras tu programa se compila:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Cada twigil señala un tipo diferente de variable a simple vista, así que al leer `$*foo` sabes inmediatamente que es dinámica, y `$?foo` que es una constante de tiempo de compilación. El siguiente tema examina las [variables dinámicas](/es/advanced/special-variables/dynamic-variables) en detalle, ya que se comportan de manera bastante diferente a las variables léxicas que has usado hasta ahora.

{% include nav.html %}
