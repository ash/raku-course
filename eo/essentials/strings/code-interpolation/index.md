---
title: Koda interpolado en Raku-ŝnuroj
---

{% include menu.html %}

La sekva nivelo de interpolado estas koda interpolado. Ĝi permesas al vi havi simplan (kaj kompleksan ankaŭ!) kodon rekte ene de duoble-citita ŝnuro.

La interpolita kodo estas metita inter krampoj:

```raku
my $a = 10;
my $b = 20;
say "La sumo de $a kaj $b estas {$a + $b}.";
```

La programo presas:

```console
$ raku t.raku 
La sumo de 10 kaj 20 estas 30.
```

## Variabloj denove

Unu el la aplikoj de ĉi tiu metodo estas helpi malambiguigi situaciojn kiam variablo devas esti sekvita de teksto kiu povas esti malĝuste komprenita kiel la daŭrigo de la nomo de la variablo. Por eviti tion, uzu krampojn por enfermi la variablon:

```raku
my $how-many = 5;
my $what = 'suit';
say "Estas $how-many {$what}s."; # Estas 5 vestoj.
```

Sen krampoj, Raku provus interpoladi neekzistantan variablon `$whats`.

{% include nav.html %}