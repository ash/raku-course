---
title: Nomitaj regulesprimoj
translations_gpt:
---

{% include menu.html %}

Ĝis nun vi skribis ŝablonojn rekte ene de `/ … /`. Vi ankaŭ povas doni al ŝablono **nomon** kaj reuzi ĝin, same kiel subrutinon. Deklaru unu per `my regex` (aŭ `my token`, kiun vi ĝuste renkontos baldaŭ):

```raku
my regex number { \d+ }
```

Por uzi nomitan regulesprimon ene de alia ŝablono, skribu ĝian nomon en angulaj krampoj, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

Voki `<number>` kaj kongruas kun la ŝablono **kaj** kaptas ĝin sub tiu nomo, do la kongruinta teksto disponeblas kiel `$<number>` — nomita kapto, kiun vi ricevas senpage.

Nomita regulesprimo povas esti uzata plurfoje en unu ŝablono. Kiam ĝi aperas pli ol unufoje, la kaptoj fariĝas listo, atingata laŭ indekso:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Nomitaj regulesprimoj tenas ŝablonojn legeblaj kaj permesas al vi konstrui pli grandajn el pli malgrandaj, bone nomitaj partoj. Ĝuste tion faras gramatiko en pli granda skalo.

{% include nav.html %}
