---
title: Pase una variable a un proceso hijo
translations_gpt:
---

{% include menu.html %}

## Problema

Crea un archivo `notes.txt` y escribe en él unas cuantas líneas. Pon su nombre en una variable de entorno `NOTES`. Después usa `shell` para ejecutar `wc -l`, leyendo el nombre del archivo de `$NOTES`, de modo que el hijo cuente las líneas e imprima el número. Por último, borra el archivo desde Raku — con `unlink`, no a través de la shell.

## Ejemplo

El programa imprime:

```
3
```

(y no deja ningún `notes.txt` atrás.)

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
