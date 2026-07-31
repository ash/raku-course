---
title: 'Soluzione: Tipo di triangolo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Trova il programma nel file [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Output

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Commenti

1. La guardia `unless` respinge le lunghezze di lato che violano la disuguaglianza
triangolare prima che avvenga qualunque classificazione.

1. Il numero di lunghezze di lato *distinte* rivela il tipo: una significa tutte uguali
(equilatero), due significa esattamente una coppia uguale (isoscele), tre significa tutte
diverse (scaleno).

1. Destrutturare la variabile del ciclo come `-> ($a, $b, $c)` scompatta ogni lista interna
direttamente in tre lati con un nome.

{% include nav.html %}
