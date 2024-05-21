---
title: Asignando un valor
---

{% include menu.html %}

Usa el operador `=` para poner un nuevo valor en un contenedor escalar.

```raku
my $name;
$name = 'Anna';
```

Ahora puedes usar la variable y, por ejemplo, imprimirla:

```raku
say $name;
```

## Asignaciones múltiples

Se pueden asignar múltiples variables a la vez. Por ejemplo, así es como se asignan dos escalares en una sola declaración:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Observa que no puedes omitir los paréntesis en el lado izquierdo. Pero puedes agregarlos por simetría en el lado derecho:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}