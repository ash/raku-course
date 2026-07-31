---
title: 'Soluzione: Fattorizzazione in numeri primi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Trova il programma nel file [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Output

```
[2 2 2 3 3 5]
```

## Commenti

1. Per ogni divisore candidato `$d`, il `while` interno lo divide fuori da `$n` tante volte
quante ci sta, spingendo ogni volta `$d`. Poiché i fattori più piccoli vengono rimossi per
primi, ogni `$d` che divide ancora `$n` è con certezza primo.

1. `$n div= $d` è una divisione intera che torna in `$n`; restringe il numero finché non
resta altro che `1`.

{% include nav.html %}
