---
title: Clausura sobre lo externo
translations_gpt:
---

{% include menu.html %}

## Problema

Una subrutina anidada es una *clausura*: puede ver las variables de la subrutina que la contiene. Escribe una subrutina `greet($name)` que defina una función auxiliar anidada `message` que **no** tome argumentos. La función auxiliar devuelve `"Hello, $name!"`, leyendo `$name` directamente de la subrutina contenedora `greet`. Dentro de `greet`, imprime lo que devuelve `message`, y llama a `greet('Anna')`.

## Ejemplo

El programa imprime:

```
Hello, Anna!
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
