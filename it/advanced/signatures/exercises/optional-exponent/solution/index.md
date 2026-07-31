---
title: 'Solution: Un esponente opzionale'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Puoi trovare il codice sorgente nel file [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Output

```
25
125
```

## Commenti

1. Il `?` dopo `$exp` lo rende opzionale, quindi `power` può essere chiamata con la sola base.

1. Quando `$exp` viene omesso è indefinito, e `//` fornisce il valore di riserva `2`, quindi `power(5)` eleva la base al quadrato ottenendo `25`. Se viene fornito un esponente, come in `power(5, 3)`, viene usato quel valore, dando `125`.

{% include nav.html %}
