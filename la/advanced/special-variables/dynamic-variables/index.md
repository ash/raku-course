---
title: Dynamicae variabiles
translations_gpt:
---

{% include menu.html %}

Variabilis _dynamica_ twigil `*` habet. Dissimilis variabili lexicae, quae sola in clausula ubi declaratur conspicitur, variabilis dynamica **foras per acervum vocationum** quaerendo invenitur — per eum quicumque codicem currentem vocavit, ubicumque ille codex definitus sit.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

Subprogramma `greet` variabilem `$*greeting` non declarat neque ut argumentum accipit, et tamen eam videre potest, quia variabilis dynamica est et `greet` ex loco vocatum est ubi ea in circumscriptione erat.

Hoc exemplum etiam cum simplici variabili globali scalari `$greeting` operaretur, sed natura variabilium dynamicarum in exemplo sequenti videbitur.

Quia quaesitio acervum vocationum sequitur, declaratio propior remotiorem per durationem suae clausulae **superat**:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

Idem `show` primo `outer` imprimit et `inner` cum ex clausula quae `$*level` iterum declaravit vocatur. Haec est _circumscriptio dynamica_, et sic operantur `$*OUT`, `$*IN` et `$*ERR` in Raku inbuilta — exitum ad tempus redirigere potes `$*OUT` in clausula iterum declarando, et omnis procedura quam intus vocas novum valorem videt. Variabiles dynamicae optimae sunt ad contextum qui in codicem vocatum fluere debet sine hoc quod ut argumentum expressum tradatur.

{% include nav.html %}
