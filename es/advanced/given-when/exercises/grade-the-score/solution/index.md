---
title: 'Solution: Etapa de vida según la edad'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Encuentra el programa en el archivo [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Salida

```
adult
```

## Comentarios

1. Esta solución mezcla dos tipos de `when`. El primero es una *condición*, `$_ < 0` (donde `$_` es el topico establecido por `given`), que descarta las edades invalidas; el resto son *rangos* que agrupan las edades válidas en etapas.

1. El orden importa. La comprobación de edad negativa va primero, así que se ejecuta antes de que se pruebe cualquier rango. El valor `30` cae en `20..64`, por lo que el programa imprime `adult`.

1. El bloque `default` cubre toda edad de 65 en adelante, que no esta capturada por ninguno de los rangos listados.

Podrías darle la vuelta y dejar que `default` capture la entrada *invalida* en su lugar. Lista cada etapa reconocida — incluyendo `senior` como la condición `$_ >= 65` — y trata cualquier sobrante (como una edad negativa) como inválido:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Aquí `default` es una rama genuina de "ninguno de los anteriores". Cual versión se lee mejor es cuestión de gusto: pon la comprobación primero cuando el caso inválido es la excepción, o hazlo el respaldo cuando las etapas válidas están todas claramente enumeradas.

{% include nav.html %}
