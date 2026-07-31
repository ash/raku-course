---
title: Trabajando con la hora
---

{% include menu.html %}

Cuando necesitas la hora del día además de la fecha, usa el tipo `DateTime`. Se crea de forma similar a un `Date`, pero también proporcionas la hora, el minuto y el segundo:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

La forma de texto predeterminada sigue el estándar ISO 8601: la fecha, la letra `T`, la hora y una `Z` final para la zona horaria UTC.

Un `DateTime` da acceso a las partes de la hora, además de las partes de la fecha que ya conoces:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Para obtener el momento actual, llama a `DateTime.now`. Al igual que con `Date.today`, no mostramos su salida, porque cambia cada vez que se ejecuta el programa.

{% include nav.html %}
