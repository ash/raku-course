---
title: Pubblicare con fez
translations_gpt: Pubblicare con fez
---

{% include menu.html %}

L'argomento precedente ha introdotto `fez` come mezzo per caricare una distribuzione nell'ecosistema Raku. Non sei obbligato a usare `fez` — non è l'unico modo per pubblicare — ma è la scelta più comune, e fa molto di più che caricare: può anche configurare una nuova distribuzione e gestire il tuo account autore. Installalo con `zef`:

```
zef install fez
```

## Creare una distribuzione

Invece di assemblare manualmente un `META6.json` e le directory `lib/` e `t/`, puoi lasciare che `fez` li generi automaticamente:

```
fez init My::Greeting
```

`fez init` inizializza una nuova distribuzione su cui lavorare — una directory di progetto con un `META6.json` già pronto e la struttura standard già predisposta — così puoi passare direttamente a scrivere codice sotto `lib/` e test sotto `t/` invece di preparare il file dei metadati a mano.

## Registrazione e accesso

Per pubblicare è necessario un account nell'ecosistema. Lo crei una sola volta con `fez register` (che chiede nome utente, email e password) e accedi con `fez login`, che memorizza la tua chiave in modo che i comandi successivi siano autenticati:

```
fez register
fez login
```

Il tuo nome utente è importante: il `META6.json` di una distribuzione deve contenere un campo `auth` impostato su `zef:<nomeutente>`, che è il modo in cui l'ecosistema sa che il caricamento è davvero tuo.

## Caricamento

Con l'account attivo e la distribuzione pronta, `fez upload` confeziona la directory corrente e la invia:

```
fez upload
```

Dopodiché, chiunque può installarla per nome con `zef install My::Greeting`. Ogni versione può essere caricata una sola volta, quindi ricordati di incrementare la `version` nel `META6.json` prima di pubblicare un aggiornamento.

## Altri comandi utili

Ecco alcuni altri comandi `fez` che ti torneranno utili:

* `fez review` — controlla una distribuzione per eventuali problemi prima del caricamento;
* `fez list` — mostra le distribuzioni che hai già pubblicato;
* `fez refresh` — ricostruisce il `META6.json` a partire dai file attualmente presenti su disco.

> Tutti questi comandi richiedono `fez` installato e l'accesso alla rete, e tutto ciò che va oltre `init` richiede un account nell'ecosistema.

{% include nav.html %}
