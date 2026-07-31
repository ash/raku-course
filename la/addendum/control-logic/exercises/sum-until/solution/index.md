---
title: 'Solutio: Summa donec centum superet'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Exitus

```
reached 105 after adding 1..14
```

## Commentarii

1. Nudum `loop { }` in aeternum repetit; `last if $sum > 100` est quod illud finit, simul
atque summa limen transit.

1. `1 + 2 + … + 14` est `105`, prima summa partialis supra `100`, itaque anulus consistit
cum `$n` ad `14`.

1. Illam summam per [reductionem](/la/advanced/metaoperators/reduction) inspicere potes:

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
