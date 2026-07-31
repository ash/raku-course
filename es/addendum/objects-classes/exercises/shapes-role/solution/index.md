---
title: 'Solución: Figuras que comparten un rol'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
role Shape {
    method area { ... }
}

class Circle does Shape {
    has $.radius;
    method area { 3.14159 * $.radius ** 2 }
}

class Square does Shape {
    has $.side;
    method area { $.side ** 2 }
}

sub describe(Shape $shape) {
    say "{$shape.^name}: {$shape.area}";
}

for Circle.new(radius => 2), Square.new(side => 3) -> $shape {
    describe($shape);
}
```

🦋 Puedes encontrar el código fuente en el archivo [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Salida

```
Circle: 12.56636
Square: 9
```

## Comentarios

1. En rigor, la llamada `$shape.area` funcionaría *sin* el rol en absoluto. Raku
resuelve los métodos por nombre en el momento de la llamada, así que mientras cada
objeto tenga por casualidad un método `area`, el bucle funciona; esto se conoce como
*tipado pato*. Entonces, ¿qué nos aporta aquí el rol en realidad? Dos garantías.

1. **El rol es un tipo que puedes exigir.** `describe` se declara como
`sub describe(Shape $shape)`, así que acepta solo objetos que hagan `Shape` y rechaza
cualquier otra cosa *antes de que se ejecute el cuerpo*. Pásale un número corriente y el
programa se niega a compilar:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Sin el rol no existe ese tipo: una rutina con tipado pato aceptaría cualquier
argumento y solo reventaría más tarde, muy adentro, al llegar a `.area`.

1. **El rol es un contrato.** Declarar `area` como un esbozo (`method area { ... }`)
obliga a toda clase que haga el rol a proporcionar su propio `area`. Olvídalo y el error
no puede pasar inadvertido:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo informa del método ausente en cuanto la clase se *compone*: el programa se
niega a compilar antes de que exista un solo objeto `Triangle`. E incluso en una
implementación que aceptara la definición de la clase, el error sale a la luz a más
tardar cuando se usa el método: el esbozo `{ ... }` heredado del rol es código real que
muere con `Stub code executed` en cuanto alguien lo llama.

1. `$shape.^name` le pregunta al objeto el nombre de su clase, así que el mismo
`describe` etiqueta cada resultado correctamente sin conocer el tipo de antemano.

{% include nav.html %}
