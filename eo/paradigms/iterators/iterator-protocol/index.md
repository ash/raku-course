---
title: La protokolo de iterviloj
translations_gpt:
---

{% include menu.html %}

Ĉiu valoro, tra kiu vi povas buklo-iri — listo, intervalo, tabelo — povas transdoni al vi _itervilon_ per la metodo `.iterator`. Itervilo havas unu esencan metodon, `pull-one`, kiu redonas la sekvan valoron ĉiufoje, kiam vi vokas ĝin:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Kiam la valoroj elĉerpiĝas, `pull-one` redonas specialan gardomarkon, `IterationEnd`, anstataŭ veran elementon. Peti de la sama `$it` ankoraŭ unu valoron montras ĝin:

```raku
say $it.pull-one =:= IterationEnd; # True
```

La operatoro `=:=` testas por la **sama objekto**, kaj tiel vi rekonas la gardomarkon. Tiu detalo gravas ene de buklo, kie vi devas konservi la tiritan valoron *kaj* testi ĝin. Se vi **atribuas** ĝin per `=`, la valoro alteriĝas en ujo kaj la komparo finfine rigardas la ujon anstataŭ `IterationEnd`. La kuracilo estas **ligi** per `:=`, por ke la variablo simple *estu* tio, kion `pull-one` redonis:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # ligo, ne atribuo
    last if $v =:= IterationEnd;
    say $v;
}
```

La buklo presas `a`, `b`, `c` kaj poste haltas. Ĝuste tion faras por vi buklo `for` sub la kapuĉo: ĝi vokas `.iterator` sur la afero, tra kiu vi buklo-iras, kaj daŭre vokas `pull-one` ĝis ĝi renkontas `IterationEnd`. Vi malofte bezonas skribi tion mane, sed fari tion unufoje montras, ke iterviloj — ne listoj — estas tio, tra kio Raku efektive buklo-iras.

{% include nav.html %}
