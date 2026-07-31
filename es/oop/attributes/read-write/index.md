---
title: Atributos de lectura y escritura
translations_gpt:
---

{% include menu.html %}

Por omisión, el accesor creado por `has $.name` es de _solo lectura_. El valor se inicializa en el constructor y después puedes leerlo, pero no cambiarlo desde fuera del objeto. Asignarle algo es un error:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

El programa se detiene con:

```
Cannot modify an immutable Str (Rex)
```

Para permitir que el valor cambie a través del accesor, marca el atributo con el rasgo `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Ahora el accesor devuelve un contenedor escribible, así que la asignación funciona y el `name` del objeto pasa a ser `Max`.

{% include nav.html %}
