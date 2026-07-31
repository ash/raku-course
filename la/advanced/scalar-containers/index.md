---
title: Scalaria receptacula
---

{% include menu.html %}

Ut nomen suggerit, continentes scalares valores singulos (scalares) hospitant. Tales continentes sigillo `$` notantur.

Hic est unus ex simplicissimis et directissimis usibus scalaris:

```raku
my $lang = 'Raku';
```

Variabilis `$lang` est continens scalaris.

Per defectum, continentes scalares typum in datis non imponunt, itaque valorem cuiuslibet typi in eis servare potes. Demonstratio simplicissima huius rei est quod eandem variabilem ad numerum integrum et deinde ad seriem servandam reuti potes:

```raku
my $value = 42;
$value = 'forty-two';
```

(Auctor te hoc modo programmare non hortatur.)

Interne, hoc significat quod, per defectum, novus continens valores typi `Any` servare potest. `Any` est typus basalis pro plerisque aliis typis, ut `Int` vel `Str`.

{% include nav.html %}
