---
title: 'Solutio: Quadratus et cubus'
---

{% include menu.html %}

## Codex 1

Solutio directa est uti operatore `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Inveni codicem fontem in archivo [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube.raku).

## Codex 2

Solutio paulo elegantior est uti superscriptis Unicode.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Inveni codicem fontem in archivo [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube-2.raku).

## Exitus

Curre programmatum aliquoties et experire cum numeris diversis.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}