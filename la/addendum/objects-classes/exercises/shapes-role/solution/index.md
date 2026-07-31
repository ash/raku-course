---
title: 'Solutio: Figurae partem communem habentes'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Exitus

```
Circle: 12.56636
Square: 9
```

## Commentarii

1. Stricte, vocatio `$shape.area` *sine* parte communi omnino operaretur. Raku
methodos secundum nomen ipso momento vocationis resolvit, itaque dum unumquodque obiectum
forte methodum `area` habet, anulus currit — hoc *typizatio anatis* appellatur.
Quid ergo pars communis nobis hic revera praestat? Duas garantias.

1. **Pars communis genus est quod postulare potes.** `describe` ut
`sub describe(Shape $shape)` declaratur, itaque sola obiecta quae `Shape` agunt accipit et
quidquid aliud *antequam corpus currit* reicit. Trade illi numerum simplicem et programma
compilari recusat:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Sine parte communi nullum tale genus est — subprogramma typizatione anatis nixum quodlibet
argumentum acciperet et solum postea, penitus intus, cum `.area` attingeret, rumperetur.

1. **Pars communis pactum est.** `area` ut stipitem declarare (`method area { ... }`)
omnem classem quae partem agit cogit propriam `area` praebere. Illam oblivisce, et
error latere non potest:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo methodum absentem nuntiat simul atque classis *componitur* — programma
compilari recusat antequam unum obiectum `Triangle` exsistat. Et etiam in
implementatione quae definitionem classis accipit, error ad summum tunc emergit
cum methodus adhibetur: stipes `{ ... }` a parte communi hereditatus codex verus est
qui cum `Stub code executed` moritur simul atque quis illum vocat.

1. `$shape.^name` obiectum de nomine classis suae rogat, itaque idem `describe`
unumquemque effectum recte notat sine genere ante cognito.

{% include nav.html %}
