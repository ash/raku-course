---
title: Tipos de datos y contenedores escalares
translations_gpt:
---

{% include menu.html %}

Veamos un programa que reutiliza la misma variable para contener diferentes tipos de datos. Usamos `dd` para ver que contiene el contenedor en cada paso. Este ejemplo esta aquí con fines demostrativos y no es un estilo de programación recomendado.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Cada llamada a `dd` muestra lo que la variable `$value` contiene actualmente:

```
$value = Any
$value = 42
$value = "forty-two"
```

Al principio, la variable esta vacía, y `dd` reporta su valor como `Any` — el valor base indefinido con el que comienza un contenedor sin tipo. Después de las asignaciones, `dd` muestra el entero y luego la cadena.

Observa que `dd` no imprime un tipo antes del nombre aquí. Un contenedor sin tipo no se compromete con ningún tipo, por lo que solo se muestra el valor. Como verás en el siguiente tema, [un contenedor con un tipo declarado](/es/advanced/scalar-containers/type-constraints) se comporta de manera diferente.

{% include nav.html %}
