---
title: Declaración con inicialización
---

{% include menu.html %}

Si conoces el valor que deseas poner en una variable en el momento en que se crea la variable, puedes ahorrar una línea de código y escribirlo en una sola declaración:

```raku
my $name = 'Anna';
say $name;
```

## Múltiples variables

Para crear y asignar más de una variable, usa el siguiente patrón:

```raku
my ($name, $age) = 'Carl', 36;
```

{% include nav.html %}