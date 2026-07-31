---
title: Darbību klases rakstīšana
translations_gpt:
---

{% include menu.html %}

Darbību klase ir parasta klase ar vienu metodi katram gramatikas marķierim. Katra metode saņem šī marķiera sakritību kā `$/` un izsauc `make`, lai piesaistītu vērtību — tieši to, ko darīja iekšējais bloks, tikai turēts nošķirti no raksturā:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Gramatikā tagad ir tikai raksturs; visa nozīme dzīvo `SumActions`. Ievērojiet, kā metodes sadarbojas: `a` un `b` katra ar `make` izveido veselu skaitli, un `TOP` tos nolasa ar `$<a>.made` un `$<b>.made` un izveido to summu.

Lai darbību klasi izmantotu, padodiet `.parse` tās instanci ar nosaukto argumentu `actions` un pēc tam nolasiet augšējo rezultātu ar `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Gramatikai parsējot, katra marķiera metode izpildās automātiski un būvē vērtību no apakšas uz augšu. Rezultāts uz augšējās sakritības ir tā vērtība, kas jums vajadzīga, — šeit skaitlis `5`.

{% include nav.html %}
