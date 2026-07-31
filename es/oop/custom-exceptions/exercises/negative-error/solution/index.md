---
title: 'Solución: Un error de número negativo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Puedes encontrar el código fuente en el archivo [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Salida

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Comentarios

1. `Negative is Exception` hace lanzable la clase, y su método `message` usa el atributo `n` para construir el texto.

1. `check` valida su entrada y lanza la excepción personalizada para un número negativo. La excepción sale de `check` y llega al `CATCH` del bloque que llama, donde `when Negative` la empareja por tipo e imprime el mensaje. Validar la entrada y señalar los valores erróneos con una excepción tipada es un uso muy común y real de las excepciones personalizadas.

1. Las `{ … }` alrededor de la llamada están ahí porque un phaser `CATCH` maneja las excepciones lanzadas en **su propio bloque contenedor**. El bloque agrupa el arriesgado `check(-5)` junto con el `CATCH` que lo vigila, de modo que la excepción lanzada se captura justo aquí y la ejecución se reanuda inmediatamente después del bloque. Sin envolverlos en un bloque, el `CATCH` vigilaría el programa entero, y una vez capturada la excepción el programa simplemente terminaría, sin ningún punto natural en el que seguir.

1. El `Negative.new(n => -10).throw` final muestra la otra cara. Está **fuera** del bloque, así que nada lo captura: la excepción se propaga hasta arriba del todo y el programa muere, imprimiendo el mensaje y una traza en el error estándar y saliendo con un estado distinto de cero. Ese es el destino por omisión de cualquier excepción que no captures, y exactamente el motivo por el que el primer lanzamiento necesitaba un `CATCH` para sobrevivir.

{% include nav.html %}
