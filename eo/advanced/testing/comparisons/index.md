---
title: Komparoj kaj planoj
---

{% include menu.html %}

Krom `ok` kaj `is`, la modulo `Test` havas komparojn por diversaj specoj de valoroj. La plej utilaj estas:

* `is` — komparas du valorojn por egaleco (kiel ĉenoj/nombroj)
* `is-deeply` — komparas du datumstrukturojn por preciza, tipokonscian egalecon
* `like` — kontrolas, ke ĉeno kongruas kun regula esprimo
* `isnt` — sukcesas kiam du valoroj **ne** estas egalaj

`is-deeply` estas la ĝusta elekto por tabeloj, asociaj tabeloj kaj nestitaj datumoj, ĉar ĝi komparas strukturon kaj tipon precize:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Tio presas:

```
ok 1 - reversed
1..1
```

Kie `is` ĉenigus kaj komparus malrigore, `is-deeply` insistas, ke la strukturoj vere kongruas. Notu, ke `done-testing` metas la planon `1..1` ĉe la fino, post la kontrolo.

Anstataŭ lasi `done-testing` kalkuli la testojn por vi, vi povas deklari la nombron anticipe per `plan`. Tio protektas kontraŭ testodosiero, kiu finiĝas frue kaj silente preterlasas kontrolojn:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Ĉi-foje la plano venas **unue**, antaŭ la rezultoj:

```
1..2
ok 1 - first
ok 2 - second
```

Tio estas la videbla diferenco de `done-testing`: `plan` presas la kalkulon `1..2` supre, antaŭ ol iuj kontroloj ruliĝas, dum `done-testing` presas ĝin tute ĉe la fino. Ĉiukaze, per `plan 2` la rulo atendas ĝuste du testojn; se malpli (aŭ pli) efektive ruliĝas, la testoserio estas raportita kiel malsukcesinta. Uzu `plan` kiam la kalkulo estas fiksita kaj konata, kaj `done-testing` kiam estas pli facile lasi la kadron kalkuli.

{% include nav.html %}
