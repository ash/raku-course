---
title: 'Solutio: Resolutio in factores primos'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Exitus

```
[2 2 2 3 3 5]
```

## Commentarii

1. Pro unoquoque divisore candidato `$d`, `while` internum illum ex `$n` totiens
dividit quotiens capit, `$d` singulis vicibus immittens. Quia factores minores
prius removentur, omnis `$d` qui adhuc `$n` dividit certo primus est.

1. `$n div= $d` divisio integra rursus in `$n` est; numerum minuit donec nihil nisi
`1` restet.

{% include nav.html %}
