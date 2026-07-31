---
title: Elekti la ĝustan
---

{% include menu.html %}

Por ĉiutagaj skalaroj kiel nombroj kaj ĉenoj, ĉiuj tri reprezentoj aspektas same. Ili komencas diferenci por kunmetitaj aŭ nedifinitaj valoroj. Jen `Pair` montrata en tri manieroj:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Proksimuma gvidregulo:

* [`.gist`](../gist) — por eligo destinita por esti *legata* de persono (`say`, `note`).
* [`.Str`](../str) — por eligo kiu estas *simpla teksto* (`print`, `put`, interpolado, la operatoro `~`).
* [`.raku`](../raku-method) — por *kodosimila* reprezento dum sencimigo (`dd`).

Ĉiu el ĉi tiuj metodoj povas ricevi vian propran difinon kiam vi skribas klason, por ke viaj propraj objektoj ankaŭ presu bele. Ni revenos al tio kiam ni [kreos klasojn](/eo/oop/classes) en la sekva parto.

{% include nav.html %}
