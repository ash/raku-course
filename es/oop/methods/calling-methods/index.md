---
title: Métodos que llaman a métodos
translations_gpt:
---

{% include menu.html %}

Un método puede llamar a otro método sobre el mismo objeto a través de `self`:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Dentro de `describe`, la llamada `self.area` ejecuta el método `area` sobre el mismo círculo, y su resultado se usa para construir la descripción.

Escribes `self.area` — con el punto — para llamar a un método, igual que lo llamaría desde fuera quien tuviera la instancia, por ejemplo `$c.describe`. Esto te permite construir comportamientos más complejos a partir de métodos más pequeños, cada uno con un solo cometido.

{% include nav.html %}
