---
title: 'Solution: Somma con il sigillo `&`'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Puoi trovare il codice sorgente nel file [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Output

```
5
```

## Commenti

1. Il blocco a freccia elenca due parametri, `-> $a, $b`, quindi la subroutine anonima accetta due argomenti.

1. Poiche la variabile e dichiarata con il sigillo `&`, puo essere chiamata come `add(2, 3)` esattamente come una subroutine con nome — senza sigillo nel punto di chiamata — dando `5`.

{% include nav.html %}
