---
title: Intervalla
---

{% include menu.html %}

Intervalla in Raku indices generant rerum sequentium.

In casu simplicissimo, intervallum est index numerorum integerum incrementantium. Ad creandum intervallum, utere operatore `..` et duobus valoribus qui definiunt valores minimos et maximos intervalli:

```raku
1 .. 5
```

Spatia circa operatorem sunt optativa. Constructio sequens scribi potest ut:

```raku
1..5
```

Dum intervallum est medium ad indices generandos, tamen est unum obiectum, itaque in variabili scalari servari potest:

```raku
my $r = 1 .. 5;
```

## Non solum numeri

Possibile est intervallum ex aliis generibus datarum construere, pro quibus Raku scit quomodo eas incrementare. Exempli gratia:

```raku
my $letters = 'a' .. 'z';
```

Intervalla sunt obiecta sui generis in Raku. Genus variabilis `$r` est `Range`.

{% include nav.html %}