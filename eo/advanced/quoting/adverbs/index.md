---
title: Citaj adverboj
translations_gpt:
---

{% include menu.html %}

La konduto de cita konstruaĵo povas esti agordita per _adverboj_. Ĉiu cita funkcio — interpoli skalarojn, ruli enkonstruitajn fermojn, prilabori maldekstrajn streketojn — estas kontrolata de sia propra adverbo, kiu ŝaltas aŭ malŝaltas tiun unu funkcion, do vi povas komenci de `q` aŭ `Q` kaj aldoni reen ĝuste la funkciojn, kiujn vi bezonas.

Kelkaj oftaj adverboj:

* `:s` / `:scalar` — interpoli skalarajn variablojn (`$x`)
* `:c` / `:closure` — interpoli enkonstruitan kodon en `{ … }`
* `:b` / `:backslash` — prilabori maldekstre-streketajn eskapojn kiel `\n`

Aldonu unu al `q` por ebligi ununuran funkcion. Ekzemple, permesi enkonstruitan kodon sed nenion alian:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — simpla q lasas la blokon netuŝita
say q:c/result: {3 * 4}/; # result: 12        — :c ruligas la blokon
```

Kun simpla `q`, la `{ 3 * 4 }` estas presita laŭlitere; nur `:c` ruligas la blokon kaj enmetas ĝian valoron, dum `$variablo` ankoraŭ estus lasita sola. Notu la `/…/`-limigilojn ĉi tie: limigi la ĉenon per `{…}` ankoraŭ funkcius — la kompililo ĝuste kalkulas la nestitajn krampojn — sed tiam la interna `{ 3 * 4 }` estas legita kiel parto de la limigita teksto anstataŭ kiel fermo, do `:c` lasus ĝin laŭlitera. Kiam ajn la teksto enhavas `{ … }`-blokon, elektu limigilon alian ol `{…}` por ke la fermo efektive ruliĝu. Vi povas aldoni skalaran interpoladon al la alie-laŭlitera `Q`:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Adverboj ankaŭ **malŝaltas** funkciojn per `!`. Por uzi `qq` sed teni `$` laŭlitera:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` ekvivalentas al `Q` kun ĉiuj interpolaj adverboj ŝaltitaj, kaj `q` ekvivalentas al `Q` kun pli malgranda aro. La adverboj donas al vi detalan kontrolon inter tiuj du ekstremoj.

{% include nav.html %}
