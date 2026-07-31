---
title: 'Soluzione: Create un moltiplicatore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Trova il programma nel file [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Output

```
14
21
```

## Commenti

1. `multiplier(2)` restituisce una subroutine che ricorda che `$n` è `2`; `multiplier(3)` restituisce una subroutine separata che ricorda `3`.

1. Ogni subroutine restituita conserva il proprio `$n`, quindi `double(7)` dà `14` e `triple(7)` dà `21` — due funzioni indipendenti costruite dalla stessa fabbrica.

{% include nav.html %}
