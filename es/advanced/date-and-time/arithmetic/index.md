---
title: Aritmética de fechas
---

{% include menu.html %}

Las fechas admiten aritmética, lo que hace que muchos cálculos cotidianos sean simples.

Sumar un entero a una fecha la avanza esa cantidad de días. El resultado es una nueva fecha, con el mes y el año ajustados automáticamente:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Restar una fecha de otra da el número de días entre ellas:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Para pasos más grandes, los métodos `later` y `earlier` aceptan argumentos con nombre como `:days`, `:months` o `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Estos métodos mantienen la aritmética correcta a través de los límites de meses y años, por lo que nunca tienes que preocuparte por cuántos días tiene un mes en particular.

{% include nav.html %}
