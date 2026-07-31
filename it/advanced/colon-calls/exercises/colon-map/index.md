---
title: Un map con due punti
translations_gpt:
---

{% include menu.html %}

## Problema

Ecco un'espressione che raddoppia i numeri da `1` a `10` e poi mantiene solo quelli maggiori di `10`:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Riscrivila in modo che la chiamata al metodo `grep` usi la forma con i due punti anziché le parentesi. Lascia invariato il resto della catena. Ricorda che la forma con i due punti consuma il resto dell'istruzione, quindi solo l'ultima chiamata in una catena può usarla.

## Esempio

Il programma stampa:

```
(12 14 16 18 20)
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
