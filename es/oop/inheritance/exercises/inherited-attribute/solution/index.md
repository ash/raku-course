---
title: 'Solución: Un atributo heredado'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 Puedes encontrar el código fuente en el archivo [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Salida

```
2
4
```

## Comentarios

1. `Bike` y `Car` heredan ambas de `Vehicle` el atributo `wheels` (y su accesor). Ninguna vuelve a declarar el atributo desde cero: solo le dan al heredado un valor por defecto, `2` y `4` respectivamente.

1. Como el valor por defecto está incorporado en cada clase, puedes crear los objetos con un simple `Bike.new` y `Car.new`, y el accesor heredado lee el número correcto de ruedas.

1. Puedes pasar el valor explícitamente, por ejemplo `Car.new(wheels => 3)`, y un argumento explícito anula el valor por defecto. Pero como una bicicleta o un coche vienen muy probablemente ya con su número habitual de ruedas, los valores por defecto mantienen sencillo el caso común y dejan sitio a la excepción ocasional.

{% include nav.html %}
