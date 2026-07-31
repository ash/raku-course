---
title: 'Intercettare le eccezioni con `try`'
translations_gpt:
---

{% include menu.html %}

Quando qualcosa va storto in un programma Raku — un file mancante, un `die` esplicito — viene sollevata un'_eccezione_. Per impostazione predefinita un'eccezione non gestita ferma il programma. Il blocco `try` ti permette di eseguire codice che potrebbe fallire senza far crollare tutto.

Avvolgi il codice rischioso in un blocco `try`. Se al suo interno viene sollevata un'eccezione, il blocco si ferma lì, ma il programma continua:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

Il `die` viene intercettato dal `try`, quindi il programma non crolla: prosegue dritto all'istruzione successiva e stampa:

```
Still works
```

Quando il blocco fallisce così, esso vale un valore non definito, quindi `$result` non è definito:

```raku
say $result.defined; # False
```

L'eccezione intercettata è conservata nella variabile speciale `$!`. Da lì puoi leggerne il messaggio:

```raku
say $!.message; # Boom!
```

Così `try` trasforma un errore fatale in qualcosa che il tuo programma può ispezionare e a cui può reagire. Se il blocco gira senza alcuna eccezione, `$result` contiene il suo valore e `$!` non è definito.

{% include nav.html %}
