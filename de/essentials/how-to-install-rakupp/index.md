---
title: Wie man Raku++ installiert
translations_gpt:
---

{% include menu.html %}

Raku++ wird über sein GitHub-Repository [github.com/ash/rakupp](https://github.com/ash/rakupp) verbreitet. Die Installation liefert Ihnen eine einzige ausführbare Datei namens `rakupp`.

## Binärdateien

Fertige Binärdateien der aktuellen Veröffentlichung gibt es für Windows, macOS und Linux. Laden Sie die passende für Ihr Betriebssystem von der Releases-Seite des Repositorys herunter — mehr ist nicht einzurichten, denn Raku++ hat keine gesonderte virtuelle Maschine zu installieren.

## Aus dem Quellcode bauen

Da Raku++ in C++ geschrieben ist, können Sie ihn auch selbst aus dem Quellcode im Repository bauen. Das Repository erklärt, welche Werkzeuge Sie brauchen und wie Sie ihn übersetzen.

## Versionsnummern

Welche Version Sie haben, sehen Sie mit der Option `--version`:

```console
$ rakupp --version
Raku++ (rakupp) 0.5.1 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

Die Zeile nennt die Veröffentlichung von Raku++ selbst (`0.5.1`) und die Version der Sprache Raku, auf die er zielt (`6.d`, mit einigen Möglichkeiten aus `6.e`). Vergleichen Sie das mit dem Versionsbanner von Rakudo auf der [Seite zur Rakudo-Installation](/de/essentials/how-to-install-rakudo), um zu sehen, wie sich die beiden Compiler jeweils melden.

{% include nav.html %}
