---
title: 'Esercizio: Sostituisci con antonimi'
---

{% include menu.html %}

## Problema

Crea un programma che sostituisce tutte le parole dalla linea di comando con i loro antonimi. Se la parola manca nel dizionario, non modificarla e stampala così com'è.

Usa un hash hard-coded per mantenere il dizionario degli antonimi. Per tua comodità, ecco una lista preparata di circa 200 coppie che puoi copiare e incollare direttamente nel tuo programma: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Tutte le coppie sono mantenute in entrambe le direzioni, ad esempio:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Rendi il programma il più semplice possibile e stampa le parole riga per riga.

## Esempio

Esegui il programma e passa alcune parole ad esso. Assicurati che almeno alcune delle parole possano essere trovate nel dizionario.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}