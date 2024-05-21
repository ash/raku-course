---
title: Parametri posizionali
---

{% include menu.html %}

L'ordine dei parametri di una funzione è importante. Ad esempio, crea una funzione che calcola la differenza tra due numeri:

```raku
sub diff($a, $b) { $a - $b }
```

È ovvio che il risultato della chiamata `diff(10, 20)` differisce da `diff(20, 10)`.

I parametri elencati come una lista separata da virgole, come nella funzione sopra, sono chiamati _posizionali_. Il loro significato dipende dall'ordine in cui gli argomenti vengono passati alla funzione quando viene chiamata.

{% include nav.html %}