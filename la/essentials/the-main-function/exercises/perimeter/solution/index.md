---
title: 'Solutio: Perimeter of rectanguli'
---

{% include menu.html %}

Hic programma potest accipere vel unum vel duo argumenta ex linea mandati. Novum artificium hic in solutione ostenditur. Valor praedefinitus secundi variabilis ponitur ad valorem primi variabilis: `sub MAIN($a, $b = $a)`. Ita, pro creandis duabus functionibus multiplicibus, habemus functionem generalem quae secundam lateris magnitudinem ponit si figura est quadratum.

## Codex

Hic est solutio:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'quadratum' !! 'rectangulum';
    say "Perimeter $shape est $perimeter.";
}
```

🦋 Invenies programmatum in archivo [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/perimeter.raku).

## Output

Tenta diversos valores inputorum ad probandum tam quadrata quam rectangula.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
Perimeter quadrati est 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
Perimeter rectanguli est 6.
```

Nota quod est tertium casus qui etiam probandus est. Si duo aequalia numeri transeunt, programma adhuc intellegere debet quod hoc erat quadratum:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
Perimeter quadrati est 8.
```

{% include nav.html %}