---
title: "Supply definiti all'esterno"
translations_gpt:
---

{% include menu.html %}

Ogni `whenever` visto finora ha creato il proprio supply proprio lì nell'intestazione — `whenever Supply.from-list(...)`. Si legge bene per un esempio veloce, ma i programmi veri raramente hanno la propria sorgente di eventi sottomano esattamente in quel punto. Più spesso un supply viene costruito altrove — restituito da una funzione, prodotto da un `Supplier` o consegnato da un socket o da un timer — e arriva come semplice variabile. Un `whenever` è altrettanto contento di osservare un supply con un nome:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Questo stampa:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Quindi leggi `whenever $sensors { … }` come «ogni volta che il supply `$sensors` — da qualunque parte venga — emette un valore, esegui questo corpo». Il `whenever Supply.from-list(...)` in linea che hai visto prima è solo il caso particolare in cui la sorgente viene creata sul posto.

Se questa forma di blocco esterno con blocchi interni ti ricorda qualcosa, hai ragione: la [pagina successiva](/it/paradigms/react-whenever/whenever-vs-when) la confronta con `given`/`when`.

{% include nav.html %}
