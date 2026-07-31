---
title: Maldiligentaj kaj senlimaj sekvencoj
translations_gpt:
---

{% include menu.html %}

Sekvenco ne devas kalkuli ĉiujn siajn valorojn samtempe. Sekvencoj de Raku estas _maldiligentaj_: ĉiu valoro estas produktata nur kiam ĝi estas efektive bezonata. Tio ebligas priskribi sekvencon, kiu tute ne havas finon.

Por skribi senliman sekvencon, uzu `Inf` kiel la finan punkton. Envolvu la sekvencon en krampojn, ĉar `...` ligas pli malforte ol `=`:

```raku
my $naturals = (1 ... Inf);
```

Sen la krampoj, `my $naturals = 1 ... Inf` atribuus nur `1` al la variablo kaj poste konstruus la sekvencon memstare — kaj taksi senfinan sekvencon sen rezulto pendigus la programon.

Nenio estas ankoraŭ kalkulita. La sekvenco disdonos valorojn nur laŭ via peto. La metodo `head` prenas la unuajn kelkajn:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Kvankam la sekvenco estas senlima, nur la unuaj kvin nombroj estas generataj. Sen maldiligento, programo kiu provus konstrui la tutan senfinan sekvencon neniam finiĝus.

Por finia sekvenco, la metodo `tail` anstataŭe prenas valorojn de la fino:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Maldiligento estas tio, kio permesas al vi apartigi la _priskribon_ de sekvenco disde la decido, kiom da ĝi uzi.

{% include nav.html %}
