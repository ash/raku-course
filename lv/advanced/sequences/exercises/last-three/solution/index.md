---
title: 'Risinājums: Pēdējie trīs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (5, 10 ... 50).tail(3);
```

🦋 Atrodiet programmu failā [last-three.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/last-three.raku).

## Izvade

```
(40 45 50)
```

## Komentāri

1. Sākuma vērtības `5, 10` nosaka aritmētisku soli pieci, un virkne skrien līdz savam beigu punktam `50`.

1. `tail(3)` atgriež galīgās virknes pēdējās trīs vērtības — `40, 45, 50` —, gluži tāpat kā `head` atgrieztu pirmās dažas.

{% include nav.html %}
