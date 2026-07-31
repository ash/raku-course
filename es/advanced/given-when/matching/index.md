---
title: Coincidencia con rangos, tipos y condiciones
---

{% include menu.html %}

Un bloque `when` no solo compara por igualdad. Realiza una _coincidencia inteligente_ (smart match) entre el topico y el valor que le proporcionas, por lo que puedes comparar contra rangos, tipos y condiciones, no solo valores individuales.

## Rangos

Un rango coincide cuando el topico cae dentro de el. Esto hace que `given`/`when` sea una opción natural para agrupar números en bandas:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

El valor `75` cae en el rango `70..79`, por lo que el programa imprime:

```
C
```

## Tipos

Un tipo coincide cuando el topico es de ese tipo. Esto te permite ramificar según el tipo de valor que tengas:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Como `$value` contiene una cadena de texto, el programa imprime:

```
a string
```

## Condiciones

También puedes usar una comparación directamente. Dentro del `when`, el topico esta disponible como `$_`, por lo que una condición como `$_ < 0` coincide cuando es verdadera:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Aquí el primer `when` coincide, y el programa imprime:

```
negative
```

{% include nav.html %}
