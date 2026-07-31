---
title: Límites de palabra
translations_gpt:
---

{% include menu.html %}

Emparejar `cat` funciona dentro de `category`, porque las tres letras están ahí de verdad. A menudo eso no es lo que quieres: te refieres a la palabra entera `cat`. Un ancla de _límite de palabra_ lo resuelve.

* `<<` coincide en el borde **izquierdo** de una palabra (su principio)
* `>>` coincide en el borde **derecho** de una palabra (su final)

Envuelve una palabra en estas anclas para emparejarla solo como palabra completa:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

En `category` no hay ningún límite de palabra justo después de `cat`, así que el patrón anclado falla: exactamente el comportamiento que queríamos.

Un límite de palabra está entre un carácter de palabra (`\w`) y uno que no lo es, así que no consume nada por sí mismo; como `^` y `$`, solo afirma una posición.

Las dos anclas también se pueden escribir con las comillas angulares `«` y `»`, si las prefieres. Se comportan exactamente como `<<` y `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
