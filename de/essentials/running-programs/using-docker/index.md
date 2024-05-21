---
title: Docker zur Ausführung von Raku verwenden
---

{% include menu.html %}

Ein Rakudo Star Docker-Image kann sowohl für das Ausführen einer REPL-Shell als auch für die Ausführung eines Programms aus einer Datei verwendet werden.

Um die Shell zu starten, führen Sie den folgenden Befehl aus. Er wird das neueste `rakudo-star`-Image herunterladen, falls erforderlich.

```console
$ docker run -it rakudo-star
```
Um ein Programm auszuführen, verwenden Sie den folgenden Befehl:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Fügen Sie das `--rm`-Flag hinzu, wenn Sie den Container bereinigen und das Dateisystem entfernen möchten, wenn der Container beendet wird. Weitere Anweisungen finden Sie auf der Projektseite.

## Externe Links

* [Docker-Image](https://hub.docker.com/_/rakudo-star/)
* [Raku Docker-Projekt auf GitHub](https://github.com/Raku/docker)

{% include nav.html %}