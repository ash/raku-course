---
title: Métodos de clase
translations_gpt:
---

{% include menu.html %}

La mayoría de los métodos se llaman sobre un objeto, es decir, sobre una instancia de una clase. Pero un método también puede llamarse sobre la clase misma, esto es, sobre el objeto de tipo. A un método así se le suele llamar _método de clase_. Es útil para valores y operaciones que pertenecen a la clase en conjunto, y no a un objeto concreto.

Un método de clase se define exactamente igual que cualquier otro método:

```raku
class Road {
    method speed-limit { 120 }
}
```

y se llama sobre el nombre de la clase en lugar de sobre una instancia:

```raku
say Road.speed-limit; # 120
```

Ya has estado usando un método de clase sin nombrarlo: `new` es un método que se llama sobre la clase para crear un objeto nuevo.

Un método de clase no tiene acceso a los atributos de instancia — no hay ningún objeto concreto detrás —, así que solo trabaja con información que es igual para todos los objetos de la clase. Cuando el trabajo depende de los datos de un objeto concreto, usa un método ordinario llamado sobre una instancia; cuando no, un método de clase encaja de forma natural.

Fíjate en que, aunque los métodos de clase no necesitan una instancia, sí pueden usar los datos del objeto cuando sí tienes uno:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Este programa imprime el resultado esperado:

```
The maximum speed on Road 404 is 120
```

Sin el objeto instanciado de la clase, una llamada como `say Road.info` daría un error.

{% include nav.html %}
