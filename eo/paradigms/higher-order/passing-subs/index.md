---
title: Transdoni subprogramojn
translations_gpt:
---

{% include menu.html %}

Por akcepti subprogramon kiel parametron, deklaru ĝin per la sigelo `&`. Ene de la korpo vi tiam povas voki ĝin laŭ nomo:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

La parametro `&f` ricevas pecon de kodo, kaj `f($x)` vokas ĝin. Ĉi tie ni transdonis `* + 3`, esprimon _Whatever_, kiu signifas «aldonu tri al kio ajn estas donita al vi», do `apply(* + 3, 10)` kalkulas `13`.

Vi povas transdoni nomitan subprogramon same facile, referencante ĝin per la sigelo `&`, por ke ĝi estu transdonata anstataŭ vokata:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Ĝuste tiel funkcias `map` kaj `grep`: ili estas subprogramoj, kiuj prenas alian subprogramon — vian blokon — kaj aplikas ĝin al ĉiu elemento. Skribi viajn proprajn subprogramojn, kiuj prenas kodon, faras ilin same flekseblaj.

{% include nav.html %}
