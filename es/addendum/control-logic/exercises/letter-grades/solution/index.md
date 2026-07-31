---
title: 'Solución: Calificaciones por letras'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Puedes encontrar el código fuente en el archivo [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Salida

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Comentarios

1. `do given` convierte el `given`/`when` entero en una expresión cuyo valor es el del
bloque que coincide — aquí una letra de nota —, que se guarda en `$grade`.

1. Cada `when * >= N` es una comparación Whatever contra el tema. Gana la primera que
se cumple, así que cada límite solo necesita una cota inferior.

{% include nav.html %}
