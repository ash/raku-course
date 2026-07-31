---
title: Clases de caracteres predefinidas
translations_gpt:
---

{% include menu.html %}

Algunas clases de caracteres son tan comunes que Raku les da nombres cortos. Se escriben con una barra invertida:

* `\d` — un dígito
* `\w` — un carácter de «palabra»: una letra, un dígito o un guion bajo
* `\s` — un carácter de espacio en blanco (espacio, tabulador, salto de línea)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Cada una tiene una compañera en mayúscula que empareja el conjunto **opuesto**:

* `\D` — cualquier cosa que no sea un dígito
* `\W` — cualquier cosa que no sea un carácter de palabra
* `\S` — cualquier cosa que no sea espacio en blanco

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Por último, un punto suelto `.` empareja **cualquier** carácter:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Estas clases predefinidas ahorran mucha escritura, y las usarás constantemente en el resto de esta parte.

{% include nav.html %}
