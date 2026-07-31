---
title: 'Solución: Una mascota con nombre y edad'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
role Named {
    method label {
        'I am ' ~ self.name;
    }
}

role Aged {
    method status {
        self.age ~ ' years';
    }
}

class Pet does Named does Aged {
    has $.name;
    has $.age;
}

my $p = Pet.new(name => 'Rex', age => 3);
say $p.label;
say $p.status;
```

🦋 Puedes encontrar el código fuente en el archivo [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Salida

```
I am Rex
3 years
```

## Comentarios

1. `Pet` compone dos roles a la vez, ganando tanto el método `label` como el método `status`.

1. El método de cada rol usa un atributo (`name` o `age`) que aporta la clase `Pet`.

{% include nav.html %}
