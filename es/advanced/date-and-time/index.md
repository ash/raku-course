---
title: Fecha y hora
---

{% include menu.html %}

Raku tiene tipos incorporados para trabajar con fechas de calendario y horas del reloj. Una fecha de calendario se representa con el tipo `Date`. Puedes crear una proporcionando el año, mes y día:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Una vez que tienes una fecha, puedes leer sus partes:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

El método `day-of-week` devuelve en qué día de la semana cae la fecha, numerado desde `1` para el lunes hasta `7` para el domingo:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

El 27 de junio de 2026 es un sábado, por lo que el resultado es `6`.

El método `is-leap-year` indica si la fecha está en un año bisiesto:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Para obtener la fecha de hoy, llama a `Date.today`. No mostramos su salida aquí, porque depende del día en que ejecutes el programa.

{% include nav.html %}
