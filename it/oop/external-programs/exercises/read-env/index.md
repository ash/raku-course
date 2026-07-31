---
title: Passate una variabile a un processo figlio
translations_gpt:
---

{% include menu.html %}

## Problema

Crea un file `notes.txt` e scrivici dentro alcune righe. Metti il suo nome in una variabile d'ambiente `NOTES`. Poi usa `shell` per eseguire `wc -l`, leggendo il nome del file da `$NOTES`, così che il figlio conti le righe e stampi il numero. Infine cancella il file da Raku — con `unlink`, non attraverso la shell.

## Esempio

Il programma stampa:

```
3
```

(e non lascia dietro di sé alcun `notes.txt`.)

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
