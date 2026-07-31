---
title: '`WHO` kaj `HOW`'
translations_gpt:
---

{% include menu.html %}

Du pliaj introspektaj iloj kompletigas la aron: `HOW` kaj `WHO`.

## `HOW`

Chiu valoro en Raku estas subtenata de _metaobjekto_ — objekto kiu scias kiel funkcias la tipo de la valoro. `HOW` (mallongigo de _Higher Order Workings_) redonas tiun metaobjekton:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Vi uzis la metaobjekton la tutan tempon, eble sen rimarki. La `.^` en `.^name` estas metod-alvoko direktita tra `HOW`. Tiuj chi du linioj estas ekvivalentaj:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Do `$x.^name` estas nur pli mallonga maniero skribi `$x.HOW.name($x)`. Rimarku ke la objekto estas denove transdonita kiel argumento: la metaobjekto estas *komuna* por chiu valoro de la tipo, do meta-metodo ricevas informon pri kiu objekto ghi estas demandata. La formo `.^` faras tion por vi automate. (Por `name` la argumento hazarde estas ignorita, sed transdoni ghin estas la korekta, generala formo — kelkaj meta-metodoj ja uzas ghin.)

La samo validas por aliaj meta-metodoj kiujn vi eble renkontos, ekzemple `.^methods`, kiu listigas la metodojn al kiuj valoro respondas.

## `WHO`

`WHO` redonas la _pakon_ al kiu nomo apartenas — la tabelon de simboloj difinitaj en tiu nomspaco:

```raku
say Int.WHO.^name; # Stash
```

`Stash` (simbol-tabela hakilo) farighas utila kiam vi laboras kun moduloj, kie ghi ebligas al vi serĉi la nomojn kiujn modulo difinas. Ni revenos al ghi en [la sekcio pri modula introspekto](/eo/advanced/module-introspection); nuntempe sufichas scii ke `WHO` ekzistas kaj kion ghi reprezentas.

{% include nav.html %}
