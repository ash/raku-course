---
title: Il compilatore Raku++
translations_gpt:
---

{% include menu.html %}

**Raku++** — il cui eseguibile si chiama `rakupp` — è un secondo compilatore Raku, uscito per la prima volta nel luglio 2026. Mentre Rakudo gira sulla macchina virtuale MoarVM, Raku++ è scritto in **C++** e non ha bisogno di alcuna macchina virtuale.

È al tempo stesso un **interprete** e un **compilatore**: può eseguire un programma direttamente oppure tradurlo in codice nativo per guadagnare velocità. Poiché non c'è alcun runtime pesante da avviare, `rakupp` parte in pochi millisecondi, il che lo rende piacevole per gli script brevi e per il lavoro quotidiano dalla riga di comando. Il suo autore lo descrive come il compilatore Raku più veloce.

Raku++ implementa Raku 6.d (con alcune funzionalità di 6.e). Alla versione 1.5.2 supera già circa l'90% della suite di test Roast — l'insieme ufficiale dei test di Raku. È giovane, quindi non copre ancora tutto il linguaggio, ma si sviluppa rapidamente.

## Modalità interprete e compilatore

Esegui un programma direttamente, proprio come faresti con Rakudo:

```console
$ rakupp hello.raku
```

Oppure chiedi a Raku++ di trasformare un programma in un eseguibile nativo autonomo, che gira ancora più in fretta:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Per imparare tutti i giorni la semplice modalità interprete è tutto ciò che serve; le modalità di compilazione sono lì per quando vuoi la velocità in più.

## Codice sorgente

Raku++ è open source. Puoi trovarlo, insieme ai binari delle release e alle istruzioni di compilazione, su [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
