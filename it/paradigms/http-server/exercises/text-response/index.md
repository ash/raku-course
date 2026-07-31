---
title: Il percorso in maiuscolo
translations_gpt:
---

{% include menu.html %}

## Problema

Fa' che il server faccia un lavoro vero con l'input del client, invece di restituire una stringa fissa. Scrivi un server che, in un **ciclo** (come nella pagina precedente), legga ogni richiesta, ne prenda il **percorso** richiesto e lo rimandi indietro **reso maiuscolo** — così una richiesta di `/hello` risponde `HELLO`. Il percorso è la seconda parola della prima riga della richiesta (`GET /hello HTTP/1.0`); togli lo `/` iniziale prima di rendere maiuscolo. Continua a servire richiesta dopo richiesta; fermalo con Ctrl-C.

## Esempio

Richiedere un percorso con `curl` lo restituisce in maiuscolo:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
