---
title: Indices
---

{% include menu.html %}

Indices sunt similes arrayibus sed immutabiles sunt. Non est possibile mutare magnitudinem aut elementa indicis. Utere parenthesibus ad indicem creandum:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Subscriptio indicum

Ad elementa singularia indicis accedendum, utere bracketis quadratis cum indice:

```raku
say $odd[3]; # 7
```

Tamen, non est possibile novum valorem ponere:

```raku
$odd[3] = 8; # Non OK
```

Talis conatus exceptionem causat:

    Non potest immutabilem Indicem ((1 3 5 7 9)) mutare
      in block <unit> at t.raku linea 4

## Assignatio indicis ad array

Quid accidit cum indicem in variabili cum sigillo `@` servas?

```raku
my @data = (40, 42, 44);
```

In hoc casu, variabilis `@data` continet array, et eius elementa mutare potes.

%%tipblock
## Variabilis vs index

Nota quod indices immutabiles esse non significat te non posse variabilem, quae eum continet, iterum uti.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}