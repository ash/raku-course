---
title: Oplossing voor ‘Apple sharing’
---

{% include menu.html %}

Hier is de oplossing voor het probleem.

## Code

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Each person gets $gets apple(s).";
say "There are $remains apple(s) remaining.";
```

🦋 Je kunt de volledige code vinden in het bestand [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/apple-sharing.raku).

## Uitvoer

Met de invoernummers 3 en 11, geeft het programma de volgende uitvoer:

```console
$ raku exercises/numbers/apple-sharing.raku
Each person gets 3 apple(s).
There are 2 apple(s) remaining.
```

Wijzig de beginwaarde van `$N` en `$K` om andere situaties te modelleren:

* `$K` is een veelvoud van `$N`, bijvoorbeeld, `12` en `3`;
* `$K` is gelijk aan `$N`;
* `$K` is minder dan `$N`.

## Opmerkingen

In het programma gebruiken we de twee operatoren: `div` om gehele deling uit te voeren en `%` om de rest van de deling te krijgen. Als alternatief kun je de berekeningen als volgt maken:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Let ook op hoe de variabelen worden geïnterpoleerd in de string.

{% include nav.html %}