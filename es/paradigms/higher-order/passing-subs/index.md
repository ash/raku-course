---
title: Pasar subrutinas
translations_gpt:
---

{% include menu.html %}

Para aceptar una subrutina como parámetro, decláralo con el sigilo `&`. Dentro del cuerpo puedes llamarla entonces por su nombre:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

El parámetro `&f` recibe un fragmento de código, y `f($x)` lo llama. Aquí pasamos `* + 3`, una expresión _Whatever_ que significa «suma tres a lo que te den», así que `apply(* + 3, 10)` calcula `13`.

Puedes pasar con la misma facilidad una subrutina con nombre, refiriéndote a ella con el sigilo `&` para que se pase en lugar de llamarse:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Así es exactamente como funcionan `map` y `grep`: son subrutinas que reciben otra subrutina — tu bloque — y la aplican a cada elemento. Escribir subrutinas propias que reciben código las hace igual de flexibles.

{% include nav.html %}
