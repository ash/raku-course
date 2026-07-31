---
title: 'Risinājums: Figūras ar kopīgu lomu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Izvade

```
Circle: 12.56636
Square: 9
```

## Komentāri

1. Stingri ņemot, izsaukums `$shape.area` strādātu *arī bez* lomas. Raku metodes
atrisina pēc nosaukuma izsaukuma brīdī, tāpēc, kamēr vien katram objektam gadās būt
metodei `area`, cikls darbojas — to sauc par *pīļu tipizēšanu*.
Ko tad loma mums šeit patiesībā dod? Divas garantijas.

1. **Loma ir tips, ko var pieprasīt.** `describe` ir deklarēta kā
`sub describe(Shape $shape)`, tāpēc tā pieņem tikai objektus, kas pilda `Shape`, un
atsaka visu citu *pirms ķermeņa izpildes*. Padodiet tai parastu skaitli, un programma
atsakās kompilēties:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Bez lomas tāda tipa nav — pīļu tipizēta procedūra pieņemtu jebkuru argumentu un
uzsprāgtu tikai vēlāk, dziļi iekšā, kad tā nonāktu līdz `.area`.

1. **Loma ir līgums.** Deklarējot `area` kā aizvietni (`method area { ... }`),
katrai klasei, kas pilda lomu, tiek uzlikts par pienākumu piegādāt savu `area`.
Aizmirstiet to, un kļūda nevar palikt nepamanīta:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo par trūkstošo metodi paziņo, tiklīdz klase tiek *komponēta*, — programma
atsakās kompilēties, pirms vēl pastāv kaut viens `Triangle` objekts. Un pat
realizācijā, kas klases definīciju pieņemtu, kļūda atklājas vēlākais tad, kad metodi
lieto: no lomas mantotā aizvietne `{ ... }` ir īsts kods, kas nomirst ar
`Stub code executed`, tiklīdz kāds to izsauc.

1. `$shape.^name` objektam pajautā tā klases nosaukumu, tāpēc viena un tā pati
`describe` katru rezultātu apzīmē pareizi, iepriekš nezinot tipu.

{% include nav.html %}
