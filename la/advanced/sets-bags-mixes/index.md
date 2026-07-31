---
title: Coniuncta, sacculi, et mixturae
translations_gpt:
---

{% include menu.html %}

Praeter ordines et tabulas dispersas, Raku praebet aliquot receptacula specialia ad collectiones valorum. Simplicissimum est `Set` — collectio non ordinata valorum _distinctorum_, ubi quisque valor aut membrum est aut non est, et duplicata ignorantur.

Inopiam creas functione `set`. Valores repetiti in unum collabuntur:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Etsi quinque numeri traditi sunt, inopia tantum tria elementa habet, quia `1` et `2` plus quam semel apparuerunt.

Praecipua quaestio quam inopiae ponis est num valor ad eam pertineat. Operator `∈` (lege "est elementum") valorem Boolianum reddit:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Si characteribus ASCII tantum uti mavis, idem operator scribi potest ut `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

Sequentes partes ostendunt quomodo inopiae coniungantur, et sacculos mixtionesque introducunt, quae sunt propinquae cognatae inopiae.

{% include nav.html %}
