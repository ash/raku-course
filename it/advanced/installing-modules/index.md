---
title: Installare moduli dal web
translations_gpt: Installare moduli dal web
---

{% include menu.html %}

Oltre ai moduli che scrivi tu stesso, esiste una vasta raccolta di moduli pubblicati dalla comunità Raku. Coprono tutto, dai framework web ai formati dati, e puoi installarli e utilizzarli nei tuoi programmi.

## L'installer `zef`

I moduli si installano con `zef`, il gestore di moduli standard che viene distribuito insieme a Rakudo. Per installare un modulo, indica a `zef` il nome del modulo:

```console
$ zef install JSON::Fast
```

`zef` scarica il modulo insieme a tutte le sue dipendenze, esegue i test e lo installa. Una volta installato, il modulo viene aggiunto automaticamente al percorso di ricerca, quindi un programma può caricarlo con un semplice `use` — non è necessaria l'opzione `-I`:

```raku
use JSON::Fast;
```

Puoi anche cercare nell'ecosistema e aggiornare o rimuovere moduli:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## Da dove provengono i moduli

I moduli pubblicati si trovano nell'_ecosistema_ Raku. Puoi esplorarlo sul sito [raku.land](https://raku.land), che elenca le distribuzioni disponibili e la relativa documentazione.

## `META6.json`

Una distribuzione destinata alla condivisione include un file descrittivo chiamato `META6.json`. Questo file registra il nome della distribuzione, la versione, i moduli che fornisce e le altre distribuzioni da cui dipende. `zef` legge questo file per sapere cosa installare e come i vari pezzi si collegano tra loro. Quando pubblichi un tuo modulo, fornire un `META6.json` corretto è ciò che lo rende installabile da tutti gli altri.

{% include nav.html %}
