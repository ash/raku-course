---
title: Come installare mutsu
translations_gpt:
---

{% include menu.html %}

mutsu pubblica build già pronte per macOS e Linux, sia per processori Intel/AMD sia per processori ARM, nella pagina delle release del suo repository GitHub, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Ogni build contiene due eseguibili: `mutsu` stesso e `mzef`, il suo gestore di pacchetti.

## Con mise

Il modo più semplice per installare una release è [mise](https://mise.jdx.dev/), uno strumento che installa e aggiorna gli strumenti per sviluppatori. Un solo comando scarica la build per la tua macchina e mette sia `mutsu` sia `mzef` nel tuo `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Con Docker

Su qualsiasi sistema su cui gira Docker, Windows compreso, puoi usare mutsu senza installarlo. Questo comando avvia il REPL interattivo:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

E questo esegue un programma dalla directory corrente:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Compilazione dal codice sorgente

mutsu è scritto in Rust, quindi puoi anche compilarlo tu stesso con Cargo a partire dal codice sorgente nel suo repository; il repository spiega i dettagli.

## Numeri di versione

Puoi controllare quale versione hai con l'opzione `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Questa è la release di mutsu stesso. Come per gli altri compilatori, la versione del linguaggio Raku è qualcosa che puoi chiedere al linguaggio:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Confronta queste informazioni con il modo in cui si presentano [Rakudo](/it/essentials/how-to-install-rakudo) e [Raku++](/it/essentials/how-to-install-rakupp).

{% include nav.html %}
