---
title: Data genera et scalaria receptacula
---

{% include menu.html %}

Inspiciamus programma quod eandem variabilem ad diversa genera datorum tenenda reutit. Adhibemus `dd` ut videamus quid continens in quoque gradu contineat. Hoc exemplum hic ad demonstrationem est et non est modus programmandi commendatus.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Quaeque vocatio `dd` ostendit quid variabilis `$value` nunc contineat:

```
$value = Any
$value = 42
$value = "forty-two"
```

Initio, variabilis vacua est, et `dd` valorem eius ut `Any` refert — valorem indefinitum basalem quo continens sine typo incipit. Post assignationes, `dd` numerum integrum et deinde seriem ostendit.

Nota quod `dd` typum ante nomen hic non imprimit. Continens sine typo nulli typo se obligat, itaque solum valor ostenditur. Ut in themate sequenti videbis, [continens cum typo declarato](/la/advanced/scalar-containers/type-constraints) aliter se gerit.

{% include nav.html %}
