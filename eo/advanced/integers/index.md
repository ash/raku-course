---
title: Entjeroj
translations_gpt:
---

{% include menu.html %}

Vi uzis entjerojn ekde la komenco de la kurso. Tiu ĉi sekcio rigardas kelkajn el iliaj malpli evidentaj trajtoj.

La plej grava estas, ke entjeroj en Raku havas _arbitran precizecon_: ili ne estas limigitaj al fiksa nombro da bajtoj, kaj ili neniam silente superfluas. Kiom ajn da memoro suficias, entjero povas kreski tiom granda, kiom vi bezonas:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Tio estas ekzakta valoro, ne proksimumaĵo. Same validas por produktoj de grandaj nombroj — la faktorialo de 50, ekzemple, estas komputita ekzakte:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Por faciligi la legadon de longaj nombroj en la fontkodo, vi povas grupigi la ciferojn per substrekoj. La substrekoj estas ignorataj de la kompililo:

```raku
say 1_000_000; # 1000000
```

La sekvaj temoj montras kiel skribi entjerojn en aliaj nombrobazoj kaj prezentas kelkajn utilajn entjerajn metodojn.

{% include nav.html %}
