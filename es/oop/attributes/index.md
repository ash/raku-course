---
title: Atributos
translations_gpt:
---

{% include menu.html %}

Una clase vacía no es muy útil. Para que un objeto lleve consigo datos propios, se dan a la clase unos _atributos_. Un atributo se declara dentro de la clase con la palabra clave `has`:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Cada objeto de la clase recibe su propia copia de estos atributos. Sus valores se fijan al crear el objeto, pasándolos a `new` como argumentos con nombre:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

El `$.` de `has $.name` hace dos cosas a la vez: declara un atributo y crea un método con el mismo nombre — un _accesor_ — que devuelve el valor del atributo:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Objetos distintos guardan valores propios, independientes entre sí:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

Los temas siguientes muestran cómo hacer modificables los atributos y cómo darles valores por defecto. (También existe una manera de declarar atributos _privados_, ocultos al exterior; volveremos a ella una vez introducidos los métodos.)

{% include nav.html %}
