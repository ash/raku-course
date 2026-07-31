---
title: Recolectar hasta llenar
---

{% include menu.html %}

## Problema

Recorre un rango generoso de números, del `1` al `100`, y sigue tomandolos, pero detente tan pronto como su total acumulado supere `10`. Imprime la lista de números que recopilaste.

Esto es algo que `grep` no puede hacer, porque necesitas detener el bucle a mitad de camino. Con `gather` y `take` puedes: usa `last` para salir del bucle en el momento en que se alcanza el limite, sin importar cuántos números queden.

## Ejemplo

El programa imprime:

```
[1 2 3 4]
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
