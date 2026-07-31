---
title: 'Solution: Elemento o lista'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Puoi trovare il codice sorgente nel file [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Output

```
3
```

## Commenti

1. `my $x = $(@a)` forza il contesto elemento, quindi l'intero array viene impacchettato nel singolo scalare `$x` piuttosto che essere espanso.

1. `@($x)` poi forza il contesto lista, espandendo `$x` nei suoi tre elementi. Il ciclo `for` quindi viene eseguito tre volte, lasciando il contatore a `3`. I due contestualizzatori sono esattamente opposti: `$( )` impacchetta una lista in un singolo elemento, `@( )` la espande di nuovo.

{% include nav.html %}
