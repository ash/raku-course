---
title: 'Solution: Una somma interna'
translations_gpt: Italian
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub compute {
    sub add($x, $y) {
        $x + $y;
    }

    add(2, 3) + add(4, 5);
}

say compute;
```

🦋 Puoi trovare il codice sorgente nel file [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Output

```
14
```

## Commenti

1. L'helper annidato `add` viene usato due volte all'interno di `compute`: `add(2, 3)` vale `5` e `add(4, 5)` vale `9`.

1. La loro somma, `14`, e il valore restituito da `compute`.

{% include nav.html %}
