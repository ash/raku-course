---
title: 'Soluzione: Numeri perfetti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Trova il programma nel file [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Output

```
[6 28]
```

## Commenti

1. `(1..^$n).grep($n %% *)` conserva i numeri sotto `$n` che lo dividono esattamente — i
suoi divisori propri. Il `%% *` è una funzione Whatever che verifica la divisibilità.

1. `[+]` somma quei divisori, e il `grep` esterno conserva solo i numeri uguali a quella
somma.

{% include nav.html %}
