---
title: '`gather` e `take`'
translations_gpt:
---

{% include menu.html %}

La coppia `gather` e `take` e un modo flessibile per costruire una lista. Si racchiude del codice in un blocco `gather`, e ogni volta che quel codice chiama `take`, il valore viene aggiunto alla lista che `gather` produce.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

Le tre chiamate a `take` contribuiscono tre valori, e `gather` li raccoglie nella lista memorizzata in `@result`.

La vera forza di questa coppia si manifesta quando le chiamate a `take` sono distribuite nel normale flusso di controllo, come un ciclo con una condizione. La lista contiene allora solo i valori che si e scelto di prendere:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Qui il ciclo itera sui numeri da 1 a 10, ma solo quelli pari vengono presi, quindi `@evens` finisce per contenere `2, 4, 6, 8, 10`. (L'operatore `%%` verifica se un numero e divisibile in modo esatto.)

Questa separazione e cio che rende `gather`/`take` cosi utile: il codice circostante decide _quando_ produrre un valore, e `gather` raccoglie silenziosamente tutto cio che viene preso.

{% include nav.html %}
