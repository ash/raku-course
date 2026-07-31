---
title: Subroutine annidate
translations_gpt: Italian
---

{% include menu.html %}

Una subroutine puo essere definita _all'interno_ di un'altra subroutine. Una subroutine annidata e una subroutine normale, ma e visibile solo all'interno della subroutine che la contiene.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

Il programma stampa:

```
I am the inner subroutine
```

Qui `inner` e dichiarata all'interno di `outer`, e `outer` la chiama. Questo funziona perche `inner` e nello scope di tutto il corpo di `outer`.

Al di fuori di `outer`, tuttavia, il nome `inner` non esiste. Il seguente programma non riesce a compilare:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

L'annidamento e utile quando una routine ausiliaria e necessaria solo per una singola subroutine. Tenerla all'interno rende chiaro che si tratta di un dettaglio privato e impedisce che venga chiamata per errore da altre parti del programma.

{% include nav.html %}
