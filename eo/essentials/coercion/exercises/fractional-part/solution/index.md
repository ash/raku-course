---
title: 'Solvo: Frakcia parto'
---

{% include menu.html %}

Por akiri la frakcian parton de nombro, vi povas subtrahi la entjeran parton, kiun vi povas akiri per konvertado de la nombro al `Int`.

## Kodo

La ebla solvo estas montrita sube:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Trovu la programon en la dosiero [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Eligo

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Komento

Provu la saman programon kun negativaj nombroj ankaŭ, ekzemple:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

En ĉi tiu kazo, la rezulto ankaŭ devus esti ĝusta:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}