---
title: Operazioni booleane con altri tipi
---

{% include menu.html %}

Nella prossima sezione, parleremo della conversione dei dati di diversi tipi tra loro. Ma prima di ciò, è importante evidenziare la seguente caratteristica di Raku. Quando si applicano operazioni booleane a stringhe o interi, i valori non vengono convertiti in booleani, e il risultato non è nemmeno un valore booleano. Considera i seguenti esempi:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Leggiamo le regole 📖 [dalla documentazione](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` restituisce il primo argomento che valuta a Falso nel contesto booleano, altrimenti restituisce l'ultimo argomento.
* `||` restituisce il primo argomento che valuta a Vero nel contesto booleano, altrimenti restituisce l'ultimo argomento.
* `^^` restituisce l'argomento Vero se ce n'è uno (e solo uno). Restituisce l'ultimo argomento se tutti gli argomenti sono Falsi. Restituisce `Nil` quando più di un argomento è vero.

Nota che abbiamo appena incontrato un valore 'null' `Nil`.

{% include nav.html %}