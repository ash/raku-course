---
title: 'Soluzione: Estraete e sommate i numeri'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Trova il programma nel file [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Output

```
numbers: 12 3 25
sum: 40
```

## Commenti

1. Passare il regex `/\d+/` a `.comb` restituisce ogni sequenza di cifre come stringa
separata, ignorando le parole in mezzo.

1. `[+] @numbers` le somma, convertendo per strada le stringhe di cifre in numeri.

{% include nav.html %}
