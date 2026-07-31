---
title: 'Soluzione: Radice numerica'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Trova il programma nel file [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Output

```
3
```

## Commenti

1. `$n.comb` divide il numero nei suoi singoli caratteri-cifra; `[+]` li somma,
trasformando automaticamente le stringhe in numeri.

1. Il ciclo si ripete finché il risultato ha più di una cifra, quindi si ferma non appena
`$n` scende sotto `10`.

{% include nav.html %}
