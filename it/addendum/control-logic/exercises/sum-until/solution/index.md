---
title: 'Soluzione: Sommare fino a superare cento'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Trova il programma nel file [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Output

```
reached 105 after adding 1..14
```

## Commenti

1. Un `loop { }` nudo si ripete per sempre; è il `last if $sum > 100` a chiuderlo, non
appena il totale supera la soglia.

1. `1 + 2 + … + 14` fa `105`, la prima somma parziale sopra `100`, quindi il ciclo si ferma
con `$n` a `14`.

1. Puoi verificare quel totale con una [riduzione](/it/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
