---
title: Entjeraj nombroj en Raku
---

{% include menu.html %}

La datentipo `Int` reprezentas entjerajn nombrojn. Nombroj povas esti pozitivaj kaj negativaj, kaj vi povas uzi eksplicitan `+` signon se vi volas. Jen kelkaj evidentaj ekzemploj:

```raku
42
-42
100
-5
0
```

Jes, nura `0` estas konsiderata entjero defaŭlte.

## Grupoj de ciferoj

Raku havas ĉarman trajton kiu permesas al vi literumi grandajn nombrojn kun kelkaj vidaj helpiloj kiuj dividas la ciferojn en grupojn de miloj:

```raku
1_000_000
-3_141_592
```

Kvankam vi povas konstrui numeron kiel `34_56`, vi prefere evitu ĝin ĉar tio povas konfuzi aliajn homojn legantajn vian kodon. Sed vi ne povas havi du apudajn substrekojn, nek vi povas komenci aŭ fini la numeron per ĝi.

## Arbitre longaj entjeroj

Raku perfekte traktas la nombrojn preter la limoj de 32 aŭ 64 bitoj. Ekzemple, la sekva programo estas akceptebla programo kiu multobligas du grandajn entjerajn nombrojn kaj presas la ĝustan rezulton.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}