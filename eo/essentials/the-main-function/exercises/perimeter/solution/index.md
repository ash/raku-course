---
title: 'Solvo: Perimetro de rektangulo'
---

{% include menu.html %}

Ĉi tiu programo devas povi preni aŭ unu aŭ du komandliniajn argumentojn. Nova truko estas montrita en la solvo ĉi tie. La defaŭlta valoro de la dua variablo estas agordita al la valoro de la unua variablo: `sub MAIN($a, $b = $a)`. Do, anstataŭ krei du multfunkciojn, ni havas ĝeneralan funkcion kiu agordas la grandecon de la dua flanko se la figuro estas kvadrato.

## Kodo

Jen la solvo:

```raku
sub MAIN($a, $b = $a) {
    my $perimetro = 2 * ($a + $b);

    my $figuro = $a == $b ?? 'kvadrato' !! 'rektangulo';
    say "La perimetro de $figuro estas $perimetro.";
}
```

🦋 Trovu la programon en la dosiero [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/perimeter.raku).

## Eligo

Provu malsamajn enirvalorojn por testi ambaŭ kvadratojn kaj rektangulojn.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
La perimetro de kvadrato estas 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
La perimetro de rektangulo estas 6.
```

Notu ke ekzistas la tria kazo kiu ankaŭ devus esti testita. Se du egalaj nombroj estas pasitaj, la programo ankoraŭ devus kompreni ke ĉi tio estis kvadrato:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
La perimetro de kvadrato estas 8.
```

{% include nav.html %}