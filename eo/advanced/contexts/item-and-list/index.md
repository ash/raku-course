---
title: Era kaj lista kunteksto
---

{% include menu.html %}

Du pluaj kuntekstoj decidas, ĉu io estas traktata kiel **listo** de pluraj valoroj aŭ kiel unuopa **ero**. Tio estas la diferenco malantaŭ la sigeloj `@` kaj `$`.

En _lista kunteksto_, tabelo disvastiĝas en siajn elementojn. Buklo `for` metas sian argumenton en listan kuntekston, do ĝi iteras tra ĉiu elemento:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

En _era kunteksto_, la sama tabelo estas traktata kiel unu sola valoro. La kuntekstigilo `$( … )` trudas eran kuntekston, do la buklo nun vidas nur unu aferon kaj ruliĝas unufoje:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Tial asigno de tabelo al skalaro pakas ĝin kiel unuopan eron anstataŭ kopii ĝiajn elementojn: `my $x = @a` metas `@a` en eran kuntekston. Rimarku, ke tiu unuopa elemento povas esti alia ujo kun multaj eroj en ĝi:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

La variablo `$var` nun enhavas unuopan (ĉar ĝi estas skalara ujo) objekton, kiu estas `Array`. Vi povas facile pruvi tion traktante `$x` kiel specon de tabela referenco (kiel vi nomus ĝin en aliaj lingvoj):

```raku
say $var[1]; # 2
```

La responda kuntekstigilo `@( … )` faras la malon, trudante listan kuntekston.

Ekzistas ankaŭ _sink-kunteksto_ — la kunteksto de deklaro, kies valoro estas forĵetata, kiel linio kiu ekzistas nur por sia flanka efiko. Kiam valoro trafas sink-kuntekston sen io utila por fari, Raku povas averti pri "senutila uzo", kio estas utila indiko, ke vi forgesis uzi rezulton.

La sigelo, kiun vi elektas (`$` kontraŭ `@`), estas vere elekto de kunteksto, kaj la kuntekstigiloj `$( )` kaj `@( )` permesas al vi superregi ĝin kie necese.

{% include nav.html %}
