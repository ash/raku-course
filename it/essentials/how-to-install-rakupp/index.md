---
title: Come installare Raku++
translations_gpt:
---

{% include menu.html %}

Raku++ viene distribuito attraverso il suo sito web, [raku.online](https://raku.online), e il suo repository GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Installarlo ti dà un unico eseguibile chiamato `rakupp` — non c'è altro da configurare, perché Raku++ non ha una macchina virtuale separata da installare.

## Il programma di installazione

Su macOS, Linux e i sistemi BSD, un solo comando scarica la build per la tua macchina, la verifica e mette `rakupp` nel tuo `PATH`. Non servono i diritti di amministratore:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

Su Windows, esegui invece questo comando in una finestra di PowerShell, oppure scarica la procedura guidata di installazione, `rakupp-setup-windows-x64.exe`, dalla pagina delle release del repository:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

Il programma di installazione chiede se vuoi avere Raku++ anche con il nome `raku`. Al termine, apri un nuovo terminale, in modo che il nuovo `PATH` abbia effetto. In seguito, `rakupp upgrade` lo sostituisce con la release più recente.

## Altri modi per installarlo

* Su macOS con Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Con Docker, senza installare nulla: `docker run --rm -it ghcr.io/ash/rakupp` avvia il REPL interattivo.
* Archivi già pronti per ogni piattaforma si trovano nella pagina delle release del repository.
* Poiché Raku++ è scritto in C++, puoi anche compilarlo tu stesso a partire dal codice sorgente; il repository spiega quali strumenti servono.

## Numeri di versione

Puoi controllare quale versione hai con l'opzione `--version`:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

La riga ti dice la release di Raku++ stesso (`5.4.1`), la data in cui è stato compilato e la piattaforma a cui è destinato il binario. La versione del linguaggio Raku è un'altra cosa, e puoi chiederla al linguaggio stesso:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Confronta queste informazioni con l'intestazione di versione di Rakudo nella [pagina di installazione di Rakudo](/it/essentials/how-to-install-rakudo) per vedere come i due compilatori si presentano.

{% include nav.html %}
