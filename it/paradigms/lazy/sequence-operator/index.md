---
title: "L'operatore di sequenza"
translations_gpt:
---

{% include menu.html %}

L'operatore di sequenza `...` costruisce un elenco a partire da uno schema iniziale fino a un valore finale. Dagli i primi elementi e l'estremo, e capirà da sé come la serie continua:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

Da `2, 4` deduce «aggiungi due ogni volta» e continua finché non raggiunge `10`. Il passo può anche essere all'ingiù:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Se gli elementi crescono per moltiplicazione invece che per addizione, l'operatore se ne accorge lo stesso:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Qui ogni termine è il doppio del precedente, quindi la sequenza è geometrica.

Quando la regola è più complessa di quanto l'operatore possa indovinare, puoi fornirla esplicitamente come chiusura degli elementi precedenti. Per esempio, una regola esplicita «aggiungi il passo»:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

Il blocco `* + 2` dice come ottenere l'elemento successivo dall'attuale. Con questo, `...` può esprimere qualunque sequenza tu sappia descrivere con una regola.

{% include nav.html %}
