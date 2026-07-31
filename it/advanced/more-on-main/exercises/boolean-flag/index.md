---
title: Un flag da riga di comando
translations_gpt:
---

{% include menu.html %}

## Problema

Un parametro con nome di tipo `Bool` di `MAIN` diventa un **flag** on/off: scrivere `--flag` lo imposta a `True`, e ometterlo mantiene il valore predefinito. Scrivi un programma il cui `MAIN` accetta `Bool :$shout = False` e stampa `HELLO` quando il flag e impostato, oppure `hello` in caso contrario.

## Esempio

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
