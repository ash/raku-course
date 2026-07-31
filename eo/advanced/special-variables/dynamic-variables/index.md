---
title: Dinamikaj variabloj
translations_gpt:
---

{% include menu.html %}

_Dinamika_ variablo havas la tvigilon `*`. Male al leksika variablo, kiu estas videbla nur en la bloko kie ĝi estas deklarita, dinamika variablo estas trovata per serĉado **eksteren tra la voka stako** — tra tiu, kiu vokis la nunan kodon, sendepende de kie tiu kodo estas difinita.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

La subrutino `greet` ne deklaras `$*greeting` kaj ne ricevas ĝin kiel argumenton, tamen ĝi povas vidi ĝin, ĉar la variablo estas dinamika kaj `greet` estis vokita el loko kie ĝi estas en amplekso.

Ĉi tiu ekzemplo funkcius ankaŭ kun simpla tutmonda skalara variablo `$greeting`, sed la naturo de dinamikaj variabloj estos videbla en la sekva ekzemplo.

Ĉar la serĉado sekvas la vokan stakon, pli proksima deklaro **anstataŭigas** pli malproksiman dum la daŭro de sia bloko:

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

La sama `show` presas `outer` la unuan fojon kaj `inner` kiam ĝi estas vokita de ene de la bloko, kiu redeklaras `$*level`. Ĉi tio estas _dinamika ampleksado_, kaj tiel funkcias la enkonstruitaj `$*OUT`, `$*IN`, kaj `$*ERR` de Raku — vi povas provizore redirekti eligon redeklarante `$*OUT` en bloko, kaj ĉiu rutino, kiun vi vokas ene de ĝi, vidas la novan valoron. Dinamikaj variabloj estas idealaj por kunteksto, kiu devus flui en vokitan kodon sen esti pasigita kiel eksplicita argumento.

{% include nav.html %}
