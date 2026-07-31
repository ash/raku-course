---
title: Integri
---

{% include menu.html %}

Numeros integros ab ipso initio cursus adhibuisti. Haec sectio aliquas eorum proprietates minus manifestas inspicit.

Maxime notandum est quod numeri integri in Raku _praecisionem arbitrariam_ habent: non limitantur ad numerum fixum bytorum, et numquam tacite superfluunt. Quamdiu satis memoriae est, numerus integer tam magnus crescere potest quantum opus est:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Hic est valor exactus, non approximatio. Idem verum est de productis magnorum numerorum — factorialis numeri 50, exempli gratia, exacte computatur:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Ut longos numeros facilius legas in codice fonte, digitos cum underscores in greges dividere potes. Underscores a compilatore ignorantur:

```raku
say 1_000_000; # 1000000
```

Sequentia themata ostendunt quomodo numeros integros in aliis basibus numerorum scribas et aliquas utiles methodos integrorum introducunt.

{% include nav.html %}
