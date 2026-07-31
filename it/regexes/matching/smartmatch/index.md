---
title: "L'operatore smartmatch"
translations_gpt:
---

{% include menu.html %}

L'operatore che applica un regex a una stringa è lo smartmatch `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Uno schema scritto fra barre è la forma più comune, ma ce ne sono altre due che significano la stessa cosa e a volte sono più chiare:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

La forma `m/.../` sottolinea che stai _riconoscendo_, ed è comoda quando vuoi aggiungere opzioni alla corrispondenza (incontrerai quelle opzioni, chiamate [_avverbi_](/it/regexes/adverbs), più avanti). La forma `rx/.../` costruisce un valore regex senza ancora applicarlo.

Molto spesso ti interessa solo se la stringa ha corrisposto, non che cosa esattamente sia stato trovato. Poiché una corrispondenza riuscita è un valore vero e una fallita è falsa, puoi usare il risultato direttamente in un contesto booleano. Il modo più pulito di ottenere un semplice `True` o `False` è la funzione `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Questo rende un regex una condizione naturale per un `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
