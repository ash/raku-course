---
title: Panoramica del comportamento degli operatori
---

{% include menu.html %}

Quando un'espressione contiene diversi operatori, Raku deve decidere in quale ordine applicarli. Due regole governano questo processo: la _precedenza_ e l'_associatività_.

## Precedenza

La precedenza decide quale operatore ha un legame più stretto. La moltiplicazione ha una precedenza più alta dell'addizione, quindi viene eseguita per prima:

```raku
say 2 + 3 * 4; # 14
```

L'espressione viene letta come `2 + (3 * 4)`, dando `14` anziché `20`. Puoi sempre usare le parentesi per forzare un ordine diverso:

```raku
say (2 + 3) * 4; # 20
```

## Associatività

L'associatività decide l'ordine tra operatori con la _stessa_ precedenza. La sottrazione è associativa a sinistra, quindi viene raggruppata da sinistra:

```raku
say 8 - 3 - 2; # 3
```

Questo equivale a `(8 - 3) - 2`, che è `3`. L'elevamento a potenza, invece, è associativo a destra:

```raku
say 2 ** 3 ** 2; # 512
```

Qui l'espressione viene raggruppata come `2 ** (3 ** 2)`, cioè `2 ** 9`, che è `512`.

## Confronti concatenati

Gli operatori di confronto possono essere _concatenati_, il che si legge in modo naturale e fa quello che ci si aspetta dalla matematica:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

Il valore centrale viene confrontato con entrambi i vicini: `1 < 2 < 3` è vero perché `1 < 2` e `2 < 3` sono entrambi veri.

{% include nav.html %}
