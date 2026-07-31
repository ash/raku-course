---
title: 'Solución: Empareje el tipo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Salida

```
cannot divide by zero
```

## Comentarios

1. En Raku, `1 / 0` no estalla de inmediato: produce un `Failure` perezoso. La excepción se lanza solo cuando *usamos* el valor, aquí al intentar hacerle `say`.

1. La excepción lanzada es del tipo incorporado `X::Numeric::DivideByZero`, y `when X::Numeric::DivideByZero` la empareja con precisión. Emparejar un tipo concreto, en lugar de capturarlo todo con `default`, te permite manejar errores distintos de maneras distintas.

{% include nav.html %}
