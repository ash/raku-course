---
title: Come installare Raku++
translations_gpt:
---

{% include menu.html %}

Raku++ viene distribuito attraverso il suo repository GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Installarlo ti dà un unico eseguibile chiamato `rakupp`.

## Binari

Per la release attuale sono disponibili binari già pronti per Windows, macOS e Linux. Scarica quello per il tuo sistema operativo dalla pagina delle release del repository — non c'è altro da configurare, perché Raku++ non ha una macchina virtuale separata da installare.

## Compilazione dai sorgenti

Poiché Raku++ è scritto in C++, puoi anche compilarlo tu stesso a partire dal codice sorgente nel repository. Il repository spiega quali strumenti servono e come compilarlo.

## Numeri di versione

Puoi controllare quale versione hai con l'opzione `--version`:

```console
$ rakupp --version
Raku++ (rakupp) 1.5.2 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

La riga ti dice la release di Raku++ stesso (`1.5.2`) e quale versione del linguaggio Raku prende di mira (`6.d`, con alcune funzionalità di `6.e`). Confrontala con l'intestazione di versione di Rakudo nella [pagina di installazione di Rakudo](/it/essentials/how-to-install-rakudo) per vedere come i due compilatori si presentano.

{% include nav.html %}
