---
title: Come installare Rakudo
translations_gpt:
---

{% include menu.html %}

Per eseguire un programma in Raku dovete avere un compilatore installato. Questo corso usa Rakudo; l'altro compilatore, [Raku++](/it/essentials/the-rakupp-compiler), si installa [a parte](/it/essentials/how-to-install-rakupp). Visitate [il sito di Rakudo](https://rakudo.org) per scaricare la versione adatta al vostro sistema operativo.

## Sorgenti

Potete scaricare un programma di installazione per il vostro sistema da [rakudo.org/downloads](https://rakudo.org/downloads). Esistono versioni per tutti i principali sistemi operativi: Windows, Mac OS e Linux. Ci sono anche i codici sorgente, che potete compilare voi stessi.

## Immagini Docker

Rakudo è disponibile anche come immagine docker. Potete usarla sia per eseguire programmi sia per provare piccoli script in una shell REPL. Trovate tutte le istruzioni su [github.com/Raku/docker](https://github.com/Raku/docker).

## Numeri di versione

Il sistema di numerazione di Rakudo forma il numero di versione in due parti: l'anno e il mese della data di rilascio. Potete così vedere subito quanto è recente il vostro compilatore. Eseguite la seguente riga di comando per vederne il numero di versione:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Qui vedete tre numeri di versione. Il primo è la versione di Rakudo stesso: `v2026.06`. Poi viene la versione del linguaggio Raku: `v6.d`. Gli aggiornamenti riceveranno per ora la lettera successiva come parte minore della versione, per esempio `v6.e` e così via. Infine vediamo il nome della macchina virtuale usata da questo compilatore: MoarVM versione `2026.06`.

{% include nav.html %}
