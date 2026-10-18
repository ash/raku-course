---
title: Wie man mutsu installiert
translations_gpt:
---

{% include menu.html %}

mutsu veröffentlicht fertige Builds für macOS und Linux, jeweils für Intel/AMD- und ARM-Prozessoren, auf der Releases-Seite seines GitHub-Repositorys [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Jeder Build enthält zwei ausführbare Dateien: `mutsu` selbst und `mzef`, seinen Paketmanager.

## Mit mise

Am einfachsten installieren Sie eine Veröffentlichung mit [mise](https://mise.jdx.dev/), einem Werkzeug, das Entwicklerwerkzeuge installiert und aktualisiert. Ein einziger Befehl lädt den passenden Build für Ihren Rechner herunter und nimmt sowohl `mutsu` als auch `mzef` in Ihren `PATH` auf:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Mit Docker

Auf jedem System, auf dem Docker läuft, Windows eingeschlossen, können Sie mutsu verwenden, ohne ihn zu installieren. Dieser Befehl startet die interaktive REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

Und dieser führt ein Programm aus dem aktuellen Verzeichnis aus:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Aus dem Quellcode bauen

mutsu ist in Rust geschrieben, daher können Sie ihn auch selbst mit Cargo aus dem Quellcode in seinem Repository bauen; die Einzelheiten erklärt das Repository.

## Versionsnummern

Welche Version Sie haben, sehen Sie mit der Option `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Das ist die Veröffentlichung von mutsu selbst. Wie bei den anderen Compilern können Sie die Version der Sprache Raku bei der Sprache selbst erfragen:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Vergleichen Sie das damit, wie sich [Rakudo](/de/essentials/how-to-install-rakudo) und [Raku++](/de/essentials/how-to-install-rakupp) melden.

{% include nav.html %}
