---
title: 'Solución: Demasiado grande'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Salida

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Comentarios

1. `TooBig is Exception` convierte la clase en una excepción lanzable. Lleva consigo dos datos, `value` y `limit`, y su método `message` teje ambos en el texto informado.

1. `.throw` lanza la excepción y `when TooBig` la empareja por tipo. El manejador hace algo más que imprimir el mensaje: lee el atributo `limit` directamente del objeto capturado para dar una pista útil. Esa es la ventaja de una excepción personalizada frente a una simple cadena: el manejador recibe datos estructurados sobre los que puede actuar.

1. La excepción se lanza **solo** cuando `$value > $limit`. Para `30` no se lanza ninguna excepción y el cuerpo del bucle llega hasta su `say`, informando de que el valor está dentro del límite. Para `99` y `60` se dispara el `throw`, así que ese `say` se salta y de ello se ocupa el `CATCH`. El cuerpo del `for` es a su vez el bloque que el `CATCH` vigila, así que una excepción capturada solo termina la iteración actual y el bucle pasa entonces al valor siguiente.

{% include nav.html %}
