---
title: 'Solvo: Trafiklumo'
---

{% include menu.html %}

La ideo de la solvo estas 'cikligi la indeksadon' de la aro kun la kvar statoj de la trafiklumoj:

```raku
my @lights = <flava ruĝa flava verda>;
```

Dum la unuaj sekundoj, la nombro da sekundoj ekde la komenco povas esti rekte uzata kiel indekso en la aro. Kiam ĝi superas 3, vi povas cikligi ĝin al la komenco de la aro per la modulo operatoro `%`. La longo de la aro estas `@lights.elems`, sed kiam ĝi estas uzata kiel operando de `%`, ne estas bezono voki la metodon `elems`, ĉar la nomo de la aro estos konvertita al nombro, kaj tiu konvertiĝo estas desegnita por redoni la nombron de elementoj.

## Kodo

Jen la solvo:

```raku
my @lights = <flava ruĝa flava verda>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Trovu la programon en la dosiero [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Eligo

Rulu la programon. Krome, provu aliajn valorojn en la programo.

```console
$ raku exercises/positionals/traffic-lights.raku
verda
flava
ruĝa
```

{% include nav.html %}