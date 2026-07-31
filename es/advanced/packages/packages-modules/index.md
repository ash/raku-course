---
title: Paquetes y módulos
translations_gpt:
---

{% include menu.html %}

La palabra clave `package` introduce un espacio de nombres. Todo lo que se declare dentro de él con `our` pasa a formar parte de ese espacio de nombres y puede ser accedido desde afuera a través del nombre del paquete y el separador `::`:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

La variable se accede como `$Maths::pi` — el sigilo, luego el nombre del paquete y después el nombre de la variable. Una subrutina se llama como `Maths::double(...)`.

Tanto `package` como `module` crean un espacio de nombres; difieren en lo que hacen adicionalmente. Un `module` es la opción habitual para una unidad de código reutilizable, mientras que un `package` simple es solo el espacio de nombres sin nada extra. (Una `class`, que conocerás en [la siguiente parte](/es/oop), también crea un espacio de nombres y agrega la maquinaria de programación orientada a objetos encima.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Así que el espacio de nombres que has estado obteniendo de `module` es el mismo mecanismo que un `package` proporciona por sí solo. Elegir entre ellos es principalmente una cuestión de intención: `module` para bibliotecas, `package` para un espacio de nombres básico — y, una vez que llegues a los objetos, `class` para tipos.

{% include nav.html %}
