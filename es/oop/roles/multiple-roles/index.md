---
title: Componer varios roles
translations_gpt:
---

{% include menu.html %}

Una clase puede asumir más de un rol. Basta con enumerarlos, cada uno con su propio `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

La clase `Duck` tiene ahora tanto el método `move` de `Walk` como el método `dive` de `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Combinar roles así se llama _composición_. Te permite ensamblar una clase a partir de varias piezas de comportamiento independientes, lo que suele ser más flexible que construir una única cadena de herencia: una clase puede mezclar exactamente las capacidades que necesita, y nada más.

{% include nav.html %}
