---
title: Utilizzare Docker per eseguire Raku
---

{% include menu.html %}

Un'immagine docker di Rakudo Star può essere utilizzata sia per eseguire una shell REPL che per eseguire un programma da un file.

Per avviare la shell, esegui il seguente comando. Scaricherà l'ultima immagine `rakudo-star` se necessario.

```console
$ docker run -it rakudo-star
```
Per eseguire un programma, utilizza il seguente comando:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Aggiungi il flag `--rm` se desideri pulire il container e rimuovere il file system quando il container esce. Trova ulteriori istruzioni sulla pagina del progetto.

## Link esterni

* [Immagine Docker](https://hub.docker.com/_/rakudo-star/)
* [Progetto Raku docker su GitHub](https://github.com/Raku/docker)

{% include nav.html %}