---
title: Usare moduli
translations_gpt: Usare i moduli
---

{% include menu.html %}

Per usare un modulo, caricalo con l'istruzione `use`. Dopo di che, i nomi che il modulo esporta sono disponibili come se li avessi scritti tu stesso.

Dato il file `Greeting.rakumod` dell'argomento precedente, un programma lo usa cosi:

```raku
use Greeting;

say hello('Anna');
```

Poiche `hello` e stato contrassegnato con `is export`, l'istruzione `use` lo rende disponibile e il programma lo chiama direttamente:

```
Hello, Anna!
```

Affinche Raku trovi il modulo, questo deve trovarsi nel percorso di ricerca dei moduli. Quando il file del modulo si trova nella stessa directory del tuo programma, puoi dire a Raku di cercare li con l'opzione `-I.` (il punto significa "la directory corrente"):

```console
$ raku -I. program.raku
Hello, Anna!
```

I moduli installati (trattati piu avanti in [Installare moduli dal web](/it/advanced/installing-modules)) vengono trovati automaticamente, quindi l'opzione `-I` e necessaria solo per i moduli che si trovano accanto al tuo programma.

{% include nav.html %}
