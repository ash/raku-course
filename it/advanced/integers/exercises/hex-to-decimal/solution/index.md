---
title: 'Solution: Da esadecimale a decimale'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Puoi trovare il codice sorgente nel file [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Output

```
26
1A
```

## Commenti

1. La forma radice `:16<1A>` legge `1A` come un numero in base 16, che equivale a `1 × 16 + 10 = 26`. La variabile `$n` ora contiene il semplice intero.

1. `$n.base(16)` riconverte quell'intero in una stringa in base 16, ottenendo di nuovo `1A` — confermando che leggere una base e stampare in una base sono operazioni inverse.

{% include nav.html %}
