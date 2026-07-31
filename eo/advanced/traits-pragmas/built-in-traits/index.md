---
title: Enkonstruitaj trajtoj
translations_gpt:
---

{% include menu.html %}

_Trajto_ estas aplikata per la ŝlosilvorto `is` tuj post deklaro. Ĝi ruliĝas dum kompilado kaj ŝanĝas iun fiksitan econ de la aĵo, al kiu ĝi estas alfiksita. Raku liveras multajn; vi jam uzis kelkajn.

Defaŭlte, la parametroj de subrutino estas **nur-legeblaj** — vi ne povas atribui al ili ene de la rutino. La trajto `is copy` donas al vi privatan, modifeblan kopion de la argumento, kiun vi povas ŝanĝi sen influi la vokanton:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — la propra variablo de la vokanto restas netuŝita
```

La trajto `is rw` iras plu: ĝi ligas la parametron al la variablo de la vokanto, do ŝanĝo farita ene de la rutino videblas ekstere:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Sen unu el ĉi tiuj trajtoj, `$n++` estus kompiltempa eraro, ĉar la parametro estus nur-legebla.

Alia ofta trajto starigas defaŭltan valoron:

```raku
my $port is default(8080);
say $port; # 8080
```

Ĉi tie `is default` donas al la variablo valoron, al kiu ĝi retiriĝas. Ĉiu enkonstruita trajto — `is rw`, `is copy`, `is default` kaj pliaj — alfiksas unu specifan, kompiltempan konduton al deklaro. La sekva temo montras, ke trajtoj ne estas fermita aro: [vi povas difini viajn proprajn](/eo/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
