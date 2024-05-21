---
title: Wie man Rakudo installiert
---

{% include menu.html %}

Um ein Programm in Raku auszuführen, müssen Sie einen Compiler installiert haben. Besuchen Sie [die Website von Rakudo](https://rakudo.org), um die Version herunterzuladen, die für Ihr Betriebssystem geeignet ist.

Es gibt zwei Hauptoptionen. Sie können den Compiler selbst installieren oder eine Rakudo Star Suite (auch als Rakudo * geschrieben) installieren. Rakudo Star enthält einen Paketmanager und einige nützliche Module.

## Quellen

Sie können einen Installer für Ihr System unter [rakudo.org/downloads](https://rakudo.org/downloads) herunterladen. Es gibt Versionen für alle gängigen Betriebssysteme: Windows, Mac OS und Linux. Es gibt auch Quellcodes, die Sie selbst kompilieren können.

## Rakudo Star

Es ist auch möglich, das Bundle Rakudo Star zu installieren, indem Sie den Installer ausführen, den Sie unter [rakudo.org/star](https://rakudo.org/star) erhalten. Überprüfen Sie die Versionsnummer, bevor Sie es installieren. Sie können auch die Seite namens ‘[3rd-Party Rakudo Star Bundle Packages](https://rakudo.org/star/third-party)’ besuchen, um weitere Optionen zu sehen.

## Docker-Images

Rakudo Star ist als Docker-Image verfügbar. Sie können es sowohl zum Ausführen von Programmen als auch zum Testen kleiner Skripte in einer REPL-Shell verwenden. Finden Sie alle Anweisungen unter [github.com/Raku/docker](https://github.com/Raku/docker).

## Versionsnummern

Das Versionsnummernsystem von Rakudo bildet die Versionsnummer als eine zweigeteilte Zahl: das Jahr und den Monat des Veröffentlichungsdatums. Sie können leicht erkennen, wie aktuell Ihr Compiler ist. Führen Sie die folgende Befehlszeile aus, um die Versionsnummer zu sehen:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Hier sehen Sie drei Versionsnummern. Die erste ist die Version von Rakudo selbst: `v2020.10`. Dann folgt die Version der Raku-Sprache: `v6.d`. Die Updates erhalten derzeit den nächsten Buchstaben als Teil der Nebenversionsnummer, z.B. `v6.e` usw. Schließlich sehen wir den Namen der virtuellen Maschine, die in diesem Compiler verwendet wird: MoarVM Version `2020.10`.

{% include nav.html %}