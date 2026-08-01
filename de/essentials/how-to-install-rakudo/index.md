---
title: Wie man Rakudo installiert
translations_gpt:
---

{% include menu.html %}

Um ein Programm in Raku auszuführen, müssen Sie einen Compiler installiert haben. Dieser Kurs verwendet Rakudo; der andere Compiler, [Raku++](/de/essentials/the-rakupp-compiler), wird [gesondert](/de/essentials/how-to-install-rakupp) installiert. Besuchen Sie [die Website von Rakudo](https://rakudo.org), um die für Ihr Betriebssystem passende Version herunterzuladen.

## Quellen

Ein Installationsprogramm für Ihr System finden Sie unter [rakudo.org/downloads](https://rakudo.org/downloads). Es gibt Versionen für alle gängigen Betriebssysteme: Windows, Mac OS und Linux. Ebenso gibt es die Quelltexte, die Sie selbst übersetzen können.

## Docker-Images

Rakudo ist auch als Docker-Image verfügbar. Sie können es sowohl zum Ausführen von Programmen als auch zum Erproben kleiner Skripte in einer REPL-Shell nutzen. Alle Anweisungen finden Sie unter [github.com/Raku/docker](https://github.com/Raku/docker).

## Versionsnummern

Das Versionsschema von Rakudo bildet die Versionsnummer aus zwei Teilen: dem Jahr und dem Monat des Veröffentlichungsdatums. So sehen Sie auf einen Blick, wie aktuell Ihr Compiler ist. Führen Sie die folgende Befehlszeile aus, um die Versionsnummer zu sehen:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Hier sehen Sie drei Versionsnummern. Die erste ist die Version von Rakudo selbst: `v2026.06`. Dann folgt die Version der Sprache Raku: `v6.d`. Die Aktualisierungen erhalten derzeit den nächsten Buchstaben als Nebenversion, also `v6.e` und so fort. Zuletzt sehen wir den Namen der virtuellen Maschine, die dieser Compiler verwendet: MoarVM in der Version `2026.06`.

{% include nav.html %}
