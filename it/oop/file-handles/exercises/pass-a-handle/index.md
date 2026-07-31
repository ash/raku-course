---
title: Passate un handle a una funzione
translations_gpt:
---

{% include menu.html %}

## Problema

Un handle di file è un valore ordinario, quindi puoi passarlo a una funzione come qualunque altro argomento. Scrivi una subroutine `log-line` che prende un handle e un messaggio e scrive il messaggio sull'handle, su una riga a sé.

Apri `log.txt` per la scrittura, chiama `log-line` tre volte per registrare `started`, `working` e `done`, poi chiudi l'handle, rileggi il file e stampane il contenuto.

## Esempio

Il programma stampa:

```
started
working
done
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
