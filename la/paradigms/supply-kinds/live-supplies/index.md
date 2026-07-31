---
title: Supply viva
translations_gpt:
---

{% include menu.html %}

Supply _vivum_ valores dum accidunt ad quascumque coniunctiones **illo momento** audientes diffundit. Unum per `Supplier` creas: supplier finis mittens est, et `.Supply` eius finis accipiens quem alii coniungunt.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Hic `.emit` valorem in supply vivum trudit, et omnis coniunctio praesens illum accipit. Coniunctio ante emissiones in loco erat, itaque utrumque valorem cepit.

Differentia gravis a supply ad petitionem tempus est: supply vivum valores praeteritos **non** meminit. Coniunctio post `emit` addita amitteret quidquid ante subscriptionem suam emissum est. Supply viva modellum rectum sunt pro eventibus veris — pulsationibus, nuntiis, lectionibus sensorum — ubi «quid nunc fiat» refert et praeteritum abiit.

Breviter: utere supply ad petitionem ut seriem fixam unicuique subscriptori iterum agas, et supply vivo (per `Supplier`) ut eventus dum accidunt diffundas.

{% include nav.html %}
