---
title: 'Solución: Años bisiestos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Salida

```
2000: leap
1900: common
2024: leap
2023: common
```

## Comentarios

1. La regla se lee directamente como una expresión booleana: un año bisiesto es uno
divisible por 400, *o* uno divisible por 4 pero no por 100. `%%` es la prueba de
divisibilidad.

1. `1900` es divisible por 100 pero no por 400, así que es común; `2000` es divisible
por 400, así que es bisiesto.

1. El tipo [`Date`](/es/advanced/date-and-time) de Raku ya conoce esta regla. La expone
como `.is-leap-year`, un método sobre un *objeto fecha*, así que construyes cualquier
fecha del año (aquí el 1 de enero) y se lo preguntas:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    El ejercicio, claro está, va de escribir tú mismo la regla.

{% include nav.html %}
