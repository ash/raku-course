---
title: Come installare Rakudo
---

{% include menu.html %}

Per eseguire un programma in Raku, è necessario avere un compilatore installato. Visita [il sito web di Rakudo](https://rakudo.org) per scaricare la versione adatta al tuo sistema operativo.

Ci sono due opzioni principali. Puoi installare il compilatore stesso o installare una suite Rakudo Star (anche scritta come Rakudo *). Rakudo Star include un gestore di pacchetti e alcuni moduli utili.

## Sorgenti

Puoi scaricare un programma di installazione per il tuo sistema su [rakudo.org/downloads](https://rakudo.org/downloads). Esistono versioni per tutti i principali sistemi operativi: Windows, Mac OS e Linux. Ci sono anche codici sorgente che puoi compilare tu stesso.

## Rakudo Star

È anche possibile installare il pacchetto, Rakudo Star, eseguendo il programma di installazione che ottieni su [rakudo.org/star](https://rakudo.org/star). Controlla il numero di versione prima di installarlo. Puoi anche controllare la pagina chiamata ‘[Pacchetti Rakudo Star di terze parti](https://rakudo.org/star/third-party)’ per vedere altre opzioni.

## Immagini Docker

Rakudo Star è disponibile come immagine docker. Puoi usarla sia per eseguire programmi che per testare piccoli script in una shell REPL. Trova tutte le istruzioni su [github.com/Raku/docker](https://github.com/Raku/docker).

## Numeri di versione

Il sistema di numerazione delle versioni di Rakudo forma il numero di versione come un numero a due parti: l'anno e il mese della data di rilascio. Puoi facilmente vedere quanto è recente il tuo compilatore. Esegui la seguente riga di comando per vedere il suo numero di versione:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Qui puoi vedere tre numeri di versione. Il primo è la versione di Rakudo stessa: `v2020.10`. Poi viene la versione del linguaggio Raku: `v6.d`. Gli aggiornamenti attualmente otterranno la lettera successiva come parte della versione minore, ad esempio, `v6.e`, ecc. Infine, vediamo il nome della macchina virtuale utilizzata in questo compilatore: MoarVM versione `2020.10`.

{% include nav.html %}