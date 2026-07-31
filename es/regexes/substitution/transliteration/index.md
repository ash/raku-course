---
title: Transliteración
translations_gpt:
---

{% include menu.html %}

Cuando quieres reemplazar **caracteres** sueltos en lugar de un patrón entero, usa el operador de transliteración `tr///`. Mapea cada carácter del primer conjunto al carácter que está en la misma posición del segundo:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Cada letra minúscula se reemplaza por la mayúscula que está en la posición correspondiente del segundo rango, así que toda la palabra pasa a mayúsculas.

Los dos conjuntos se emparejan carácter a carácter. Un ejemplo pequeño que desplaza tres letras:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Aquí toda `a` pasa a ser `x`, toda `b` pasa a ser `y` y toda `c` pasa a ser `z`.

La transliteración es la herramienta adecuada para las correspondencias a nivel de carácter: cambiar mayúsculas, intercambiar un alfabeto pequeño o codificar. Para cualquier cosa que dependa de un patrón en lugar de caracteres sueltos, usa `s///`.

{% include nav.html %}
