---
title: Parametri nominati
---

{% include menu.html %}

Contrarium ad [parametros posicionales](../positional-parameters), _nominati_ parametri nominibus suis referuntur.

Sequens functio duos parametros vocatos `$from` et `$to` accipit.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Nunc, ut functionem vocare, debes argumenta nominare:

```raku
say distance(from => 30, to => 10); # 20
```

Error est argumenta quasi posicionalia transmittere. Exempli gratia, vocatio `distance(30, 10)` errorem generat:

    Troppi positionale transmissi; expectati 0 argumenti sed accepti 2
        in sub distance ad t.raku linea 1
        in block <unit> ad t.raku linea 2

Bona pars est quod argumenta nominata in quolibet ordine enumerari possunt. Sequentes duae vocationes omnino aequivalentes sunt:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Variabiles transmittentes

Cum valor quem vis transmittere ad functionem in variabili servatur, cuius nomen cum nomine parametri coincidit, frui potes speciali syntaxi quae scribendi laborem minuit:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Hoc simile est vocatio verbosae:

```raku
say distance(from => $from, to => $to); # 20
```

Iterum, ordo hic non est strictus:

```raku
say distance(:$to, :$from); # 20
```

Si nomen variabilis differt a nomine parametri, utere uno modorum ad par transmittendum:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# vel:

say distance(:from($a), :to($b));
```

{% include nav.html %}