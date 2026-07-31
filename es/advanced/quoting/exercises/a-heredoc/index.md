---
title: Un heredoc
---

{% include menu.html %}

## Problema

Usando un heredoc *con interpolación*, construye una carta de confirmación de pedido a partir de unas pocas variables — un cliente `$name`, un artículo `$item`, un precio unitario `$price` y una cantidad `$count`. El heredoc debe interpolar las variables *y* calcular el total en línea con un bloque incrustado `{ … }` (`$count * $price`).

Indenta el cuerpo del heredoc para que coincida con el código circundante, y alinea el terminador de cierre con el texto para que la indentación no aparezca en la salida. Imprime el resultado.

## Ejemplo

Para `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25` y `$count = 3`, el programa imprime, sin espacios iniciales:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
