---
title: 'Solvo: La valoro de e'
---

{% include menu.html %}

## Malgarantio

En Raku, estas enkonstruita konstanto `e` kiu donas la tujajn respondon al la tasko. La solvo montrita sube estas desegnita por edukado.

## Kodo

La formulo en ĉi tiu tasko enhavas faktorion, kaj ni jam havas almenaŭ du solvojn por kalkuli ĝin (pli sekvos). La programo sube difinas du funkciojn: unu por kalkuli faktorion, alian por la parta sumo laŭ la formulo.

Ĉar estas postulite ke la funkcio povas esti vokita sen argumentoj, en kiu kazo ĝi rulas antaŭdifinitan nombron de iteracioj, ni povas aldoni [defaŭltan valoron](/eo/essentials/functions/default-values) de la parametro: `sub e-approx($max = 100)`.

En la kodo, rimarku la similecojn en kiel la rezultaj valoroj estas akumulitaj en [postfiksa `for` buklo](/eo/essentials/loops/postfix-for) super [intervalo](/eo/essentials/ranges).

Jen la solvo:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ por 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) por 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Trovu la programon en la dosiero [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Eligo

Kun 10 kaj 100 iteracioj, ni ricevas la jenajn rezultojn. Krome, provu aliajn valorojn de `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}