---
title: Caricare a runtime
translations_gpt: Esercizio 'Caricare a tempo di esecuzione'
---

{% include menu.html %}

## Problema

Ti viene dato un modulo `Greeting.rakumod` che esporta una subroutine `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Carica questo modulo con `require` invece di `use`, in modo che venga caricato a **tempo di esecuzione**. Poiche `require` non importa i nomi automaticamente, elenca il simbolo desiderato con `require Greeting <&hello>;`. Poi chiama `hello('Sam')` e stampa il risultato.

Per mostrare cosa offre il caricamento a tempo di esecuzione, metti il `require` dentro una `sub MAIN` con un flag `--quiet`, cosi che il modulo venga caricato *solo* quando un saluto e effettivamente desiderato. Con `--quiet`, il programma stampa `Silence.` e non tocca affatto il modulo.

## Esempio

Eseguendo con il modulo nel percorso di ricerca, il programma stampa:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
