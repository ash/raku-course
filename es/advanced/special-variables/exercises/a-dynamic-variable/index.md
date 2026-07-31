---
title: Una variable dinámica
translations_gpt: true
---

{% include menu.html %}

## Problema

Una variable dinámica — una escrita con el twigil `*` — se busca recorriendo hacia afuera la pila de llamadas, no por ámbito léxico. Así, el valor que ve una subrutina depende de quién la llamó, lo que permite que un bloque ejecute el código que invoca bajo una identidad diferente.

1. Declara una variable dinámica `$*user` con el valor `'guest'`.
2. Escribe una subrutina `whoami` que imprima `running as ` seguido del valor actual de `$*user` (por ejemplo, `running as guest`). Debe leer `$*user` directamente — no recibe parámetros.
3. Llama a `whoami` una vez en el nivel superior: reporta `guest`.
4. Luego, dentro de un bloque que redeclara `$*user` como `'admin'`, llama a la *misma* `whoami` de nuevo: ahora reporta `admin`.

## Ejemplo

El programa imprime:

```
running as guest
running as admin
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
