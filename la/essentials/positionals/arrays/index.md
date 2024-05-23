---
title: Arrays
---

{% include menu.html %}

Arrayes sunt aggregata genera datorum quae plus quam unam valorem continere possunt. Hoc arrays a [scalaribus elementis](/la/essentials/scalar-variables) distinguit. Elementa array possunt indicari (vel _subscripti_). Aliis verbis, elementa eius positionem habent (quod explicat nomen generale huius generis datorum: positionalia).

Variabiles array alium genus sigilli utuntur: `@`. Regulae pro nomine variabili sunt eadem ac [pro scalaribus](/la/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

Hactenus, array nomine `@cities` creatum est. Potes eam cum aliquibus valoribus implere:

```raku
@cities = 'Paris', 'Rome', 'Berlin';
```

Aliter, possibile est valores statim initializare:

```raku
my @cities = 'Paris', 'Rome', 'Berlin';
```

## Indexatio

Ad accessum singuli item array, utere paria bracketorum quae post nomen variabilis ponis:

```raku
say @cities[1];
```

Nota quod sigillum semper idem manet. Cum elementa a zero numerentur, elementum `@cities[1]` est `'Rome'` in nostro exemplo.

Arrayes sunt mutabiles, ita facile potes elementa eius mutare simpliciter assignando novum valorem eis:

```raku
@cities[0] = 'Rome';
@cities[1] = 'Paris';
```

Post hoc, sententia `say @cities[1]` novum valorem `'Paris'` imprimet.

## Magnitudo

Ad longitudinem currentem array obtinendam, vel, aliis verbis, numerum elementorum eius, utere methodo `elems`:

```raku
say @cities.elems; # 3
```

Si array apparet in contextu, ubi parameter expectatus est numerus, valor reditus est magnitudo array:

```raku
say +@cities; # 3
```

Hic, [`+` praefixus operator](/la/essentials/coercion/prefixes) numericum valorem ex argumento suo requirit, ita resultat `+@cities` est `3`.

{% include nav.html %}