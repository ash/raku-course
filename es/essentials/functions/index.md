---
title: Creación y llamada de funciones en Raku
---

{% include menu.html %}

Has llegado a la última sección de la primera parte del curso. Al completarla, tendrás todo el conocimiento necesario para crear _cualquier_ programa en Raku. El tema de esta sección son las _funciones_, o _subrutinas_, o incluso simplemente _rutinas_.

Una función es una parte reutilizable del código con su propio nombre. Puedes _llamar_ a funciones desde diferentes lugares del programa.

## Creación de una función

Para crear una función, usa la palabra clave `sub` seguida del nombre de la función. El cuerpo de la función se encierra en un par de llaves.

```raku
sub greet {
    say '¡Hola, Mundo!';
}
```

## Uso de una función

Para usar la función, simplemente coloca su nombre en el lugar donde necesitas llamarla. En Raku, la definición de una función puede estar ubicada antes o después del lugar donde se usa la función.

```raku
say 'Esto es lo que normalmente imprime el primer programa:';
greet;    

sub greet {
    say '¡Hola, Mundo!';
}
```

El programa imprime ambos mensajes:

```console
$ raku t.raku
Esto es lo que normalmente imprime el primer programa:
¡Hola, Mundo!
```

Ahora, veamos otros detalles de la creación y uso de funciones.

{% include nav.html %}