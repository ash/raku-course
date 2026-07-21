---
title: The solution of ’Shapes sharing a role‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

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

🦋 You can find the source code in the file [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Output

```
Circle: 12.56636
Square: 9
```

## Comments

1. Strictly, the call `$shape.area` would work *without* the role at all. Raku
resolves methods by name at the moment of the call, so as long as each object
happens to have an `area` method, the loop runs — this is known as *duck typing*.
So what does the role actually buy us here? Two guarantees.

1. **The role is a type you can require.** `describe` is declared as
`sub describe(Shape $shape)`, so it accepts only objects that do `Shape` and rejects
anything else *before the body runs*. Pass it a plain number and the program refuses
to compile:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Without the role there is no such type — a duck-typed routine would take any
argument and only blow up later, deep inside, when it reaches `.area`.

1. **The role is a contract.** Declaring `area` as a stub (`method area { ... }`)
forces every class that does the role to supply its own `area`. Forget it, and the
mistake cannot go unnoticed:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo reports the missing method as soon as the class is *composed* — the
program refuses to compile before a single `Triangle` object exists. And even in
an implementation that accepts the class definition, the mistake surfaces at the
latest when the method is used: the stub `{ ... }` inherited from the role is real
code that dies with `Stub code executed` as soon as anyone calls it.

1. `$shape.^name` asks the object for its class name, so the same `describe` labels
each result correctly without knowing the type in advance.

{% include nav.html %}
