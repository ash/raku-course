---
title: 'Solvo: Figuroj kun komuna rolo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Eligo

```
Circle: 12.56636
Square: 9
```

## Komentoj

1. Strikte, la voko `$shape.area` funkcius *sen* la rolo entute. Raku solvas
metodojn laŭ nomo en la momento de la voko, do dum ĉiu objekto hazarde havas
metodon `area`, la buklo funkcias — tio estas konata kiel *anasa tipado*.
Do kion la rolo efektive donas al ni ĉi tie? Du garantiojn.

1. **La rolo estas tipo, kiun vi povas postuli.** `describe` estas deklarita kiel
`sub describe(Shape $shape)`, do ĝi akceptas nur objektojn, kiuj plenumas `Shape`, kaj
rifuzas ĉion alian *antaŭ ol la korpo plenumiĝas*. Transdonu al ĝi simplan nombron kaj la
programo rifuzas kompiliĝi:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Sen la rolo ekzistas nenia tia tipo — anas-tipigita rutino prenus ajnan
argumenton kaj eksplodus nur poste, profunde interne, kiam ĝi atingus `.area`.

1. **La rolo estas kontrakto.** Deklari `area` kiel stumpon (`method area { ... }`)
devigas ĉiun klason, kiu plenumas la rolon, provizi sian propran `area`. Forgesu ĝin, kaj
la eraro ne povas resti nerimarkita:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo raportas la mankantan metodon tuj kiam la klaso estas *komponata* — la
programo rifuzas kompiliĝi antaŭ ol ekzistas eĉ unu objekto `Triangle`. Kaj eĉ en
realigo, kiu akceptas la klasan difinon, la eraro aperas plej malfrue, kiam la
metodo estas uzata: la stumpo `{ ... }` heredita de la rolo estas vera kodo, kiu
mortas per `Stub code executed` tuj kiam iu vokas ĝin.

1. `$shape.^name` demandas la objekton pri ĝia klasnomo, do la sama `describe` etikedas
ĉiun rezulton ĝuste sen koni la tipon anticipe.

{% include nav.html %}
