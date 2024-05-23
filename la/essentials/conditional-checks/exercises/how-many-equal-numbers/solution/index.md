---
title: 'Solutio: Quot numeri aequales sunt?'
---

{% include menu.html %}

Programma pauca comparationes facere debet. Pro tribus numeris input, duo casus possibiles sunt:

1. Omnes tres numeri aequales sunt,
1. Tantum duo numeri aequales sunt, et
1. Omnes numeri diversi sunt.

## Codex

Hic est solutio cum comparationibus explicitis.

```raku
my $n1 = prompt 'Numerum 1 inserere: ';
my $n2 = prompt 'Numerum 2 inserere: ';
my $n3 = prompt 'Numerum 3 inserere: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Invenire programmatum in archivo [quot-numeri-aequales-sunt.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Output

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Numerum 1 inserere: 14
Numerum 2 inserere: 8
Numerum 3 inserere: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Numerum 1 inserere: 15
Numerum 2 inserere: 15
Numerum 3 inserere: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Numerum 1 inserere: 4
Numerum 2 inserere: 6
Numerum 3 inserere: 8
0
```

## Commentarii

1. Nota quod potes tres numeros in una expressione comparare: `$n1 == $n2 == $n3`.
1. Redi ad hoc opus et solve iterum postquam de operatore reductionis didiceris.

{% include nav.html %}