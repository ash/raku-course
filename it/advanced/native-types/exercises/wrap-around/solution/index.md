---
title: 'Solution: Wrap around'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Puoi trovare il codice sorgente nel file [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Output

```
4
255
```

## Commenti

1. Un `uint8` va da `0` a `255`, ovvero 256 valori distinti. L'aritmetica su di esso viene effettivamente eseguita modulo 256.

1. `250 + 10` darebbe `260`, che non ci sta. Si riavvolge, arrivando a `260 - 256 = 4` oltre il fondo. Quindi l'overflow non si limita a superare il massimo di uno — qualsiasi risultato fuori dall'intervallo viene ripiegato all'interno.

1. Andando nell'altra direzione si ha ugualmente overflow: decrementare `0` non può dare `-1` in un tipo senza segno, quindi si riavvolge al massimo, `255`.

{% include nav.html %}
