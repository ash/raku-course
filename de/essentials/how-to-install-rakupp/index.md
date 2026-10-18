---
title: Wie man Raku++ installiert
translations_gpt:
---

{% include menu.html %}

Raku++ wird über seine Website [raku.online](https://raku.online) und sein GitHub-Repository [github.com/ash/rakupp](https://github.com/ash/rakupp) verbreitet. Die Installation liefert Ihnen eine einzige ausführbare Datei namens `rakupp` — mehr ist nicht einzurichten, denn Raku++ hat keine gesonderte virtuelle Maschine zu installieren.

## Das Installationsprogramm

Unter macOS, Linux und den BSD-Systemen lädt ein einziger Befehl den passenden Build für Ihren Rechner herunter, prüft ihn und nimmt `rakupp` in Ihren `PATH` auf. Administratorrechte sind dafür nicht nötig:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

Unter Windows führen Sie stattdessen Folgendes in einem PowerShell-Fenster aus, oder Sie laden den Installationsassistenten `rakupp-setup-windows-x64.exe` von der Releases-Seite des Repositorys herunter:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

Das Installationsprogramm fragt, ob Sie Raku++ zusätzlich unter dem Namen `raku` haben möchten. Öffnen Sie danach ein neues Terminal, damit der neue `PATH` wirksam wird. Später ersetzt `rakupp upgrade` die installierte Version durch die neueste Veröffentlichung.

## Andere Installationswege

* Unter macOS mit Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Mit Docker, ganz ohne Installation: `docker run --rm -it ghcr.io/ash/rakupp` startet die interaktive REPL.
* Fertige Archive für jede Plattform gibt es auf der Releases-Seite des Repositorys.
* Da Raku++ in C++ geschrieben ist, können Sie ihn auch selbst aus dem Quellcode bauen; das Repository erklärt, welche Werkzeuge Sie brauchen.

## Versionsnummern

Welche Version Sie haben, sehen Sie mit der Option `--version`:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

Die Zeile nennt die Veröffentlichung von Raku++ selbst (`5.4.1`), das Datum, an dem die Binärdatei gebaut wurde, und die Plattform, für die sie bestimmt ist. Die Version der Sprache Raku ist eine andere Sache, und Sie können die Sprache selbst danach fragen:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Vergleichen Sie das mit dem Versionsbanner von Rakudo auf der [Seite zur Rakudo-Installation](/de/essentials/how-to-install-rakudo), um zu sehen, wie sich die beiden Compiler jeweils melden.

{% include nav.html %}
