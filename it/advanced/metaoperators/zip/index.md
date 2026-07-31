---
title: Meta-operatori zip
---

{% include menu.html %}

Il meta-operatore zip `Z` prende due (o più) liste e accoppia i loro elementi per posizione:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

Il risultato è una lista di gruppi: il primo elemento di ogni lista insieme, poi il secondo di ciascuna, e così via.

In modo ancora più ingegnoso, è possibile combinare `Z` con un operatore per agire su ogni coppia. Per esempio, `Z+` somma gli elementi posizione per posizione:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Questo è il meta-operatore zip che avvolge l'operatore `+`: calcola `1 + 10`, `2 + 20` e `3 + 30`. Allo stesso modo, `Z*` moltiplica gli elementi corrispondenti:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

E `Z~` concatena le stringhe corrispondenti:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
