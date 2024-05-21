---
title: Quiz — Variables as named parameters
---

{% include menu.html %}

Aquí está la misma función que en el cuestionario anterior:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

También tienes tres variables en el programa:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Marca todas las formas válidas de llamar a la función y pasarle dos de las tres variables.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Aquí se pasan argumentos posicionales en lugar de los nombrados.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Sintaxis no válida en Raku.
0 | f(:$b, :$c) | No hay un parámetro nombrado `c`.
0 | f(:$a, c => $c) | No hay un parámetro nombrado `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Igual que el anterior.
1 | f(:a($a), :b($c)) | También está bien, aunque un poco redundante.


{% include quiz.html %}

{% include nav.html %}