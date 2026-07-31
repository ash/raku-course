---
title: Subrutinas anidadas
translations_gpt:
---

{% include menu.html %}

Una subrutina puede definirse _dentro_ de otra subrutina. Una subrutina anidada es una subrutina normal, pero solo es visible dentro de la subrutina que la contiene.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

El programa imprime:

```
I am the inner subroutine
```

Aquí `inner` se declara dentro de `outer`, y `outer` la llama. Esto funciona porque `inner` está en el ámbito durante todo el cuerpo de `outer`.

Fuera de `outer`, sin embargo, el nombre `inner` no existe. El siguiente programa no compila:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

La anidación es útil cuando una rutina auxiliar solo es necesaria para una subrutina. Mantenerla dentro deja claro que es un detalle privado y evita que sea llamada desde cualquier otro lugar por error.

{% include nav.html %}
