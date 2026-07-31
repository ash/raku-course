---
title: Numero di argomenti della riga di comando
translations_gpt:
---

{% include menu.html %}

## Compito

Scrivi un programma che riferisca in una frase completa quanti argomenti ha ricevuto dalla riga di comando. Fai in modo che la grammatica sia corretta: usa la parola `argument` quando ne è stato passato esattamente uno e `arguments` in tutti gli altri casi.

## Esempio

Ecco come dovrebbe reagire il programma:

```console
$ raku number-of-command-line-arguments.raku make them count us now
You passed 5 arguments.

$ raku number-of-command-line-arguments.raku solo
You passed 1 argument.
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
