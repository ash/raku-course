---
title: La operatoro de anstataŭigo
translations_gpt:
---

{% include menu.html %}

La operatoro de anstataŭigo estas `s///`. Ĝi aspektas kiel kongruo kun dua fako: la ŝablono iras inter la unuaj du oblikvoj kaj la anstataŭa teksto inter la lastaj du:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Anstataŭigo ŝanĝas la variablon **surloke**, do `$s` mem estas ĝisdatigita. La teksto en la anstataŭa parto estas laŭlitera — vi ne metas ĝin en citilojn.

Kiel kongruigo, anstataŭigo tuŝas nur la **unuan** aperon defaŭlte. Aldonu la adverbon `:g` por anstataŭigi ĉiun aperon:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Se vi volas konservi la originalon kaj produkti ŝanĝitan **kopion** anstataŭ modifi surloke, uzu la **majusklan** operatoron `S///`: ĝi faras la anstataŭigon kaj redonas la ŝanĝitan ĉenon, lasante la originalon netuŝita. Ĉar ĝi ne ĝisdatigas variablon surloke, direktu ĝin al unu per `given` anstataŭ `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(Skribi `$orig ~~ S///` avertas vin uzi `given` anstataŭe — ĉe `S///` estas nenio por modifi surloke.)

La sama nedetrua konduto ankaŭ disponeblas kiel metodo, `.subst`, kiu redonas novan ĉenon:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
