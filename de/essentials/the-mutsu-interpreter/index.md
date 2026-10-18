---
title: Der mutsu-Interpreter
translations_gpt:
---

{% include menu.html %}

**mutsu** ist eine dritte Implementierung von Raku, von Tokuhiro Matsuno in **Rust** geschrieben. Wie Rakudo übersetzt er Ihr Programm in Bytecode und führt es auf einer virtuellen Maschine aus — doch das ist nicht MoarVM, sondern seine eigene virtuelle Maschine, die in die ausführbare Datei `mutsu` eingebaut ist.

mutsu implementiert Raku 6.d und wird aktiv weiterentwickelt. Sein Autor sagt offen, dass mutsu noch nicht für den Produktiveinsatz geeignet ist, doch schon jetzt besteht er fast alle Roast-Testdateien, sodass fast alle Programme dieses Kurses unverändert darauf laufen.

Eine Lücke spielt beim Lernen eine Rolle: Einige Prüfungen zur Kompilierzeit fehlen noch. Am auffälligsten ist, dass mutsu mit Stand Version 0.24.0 eine Variable, die Sie zu deklarieren vergessen haben, nicht schon vor dem Start des Programms meldet, wie es Rakudo und Raku++ tun. Wenn der Kurs eine solche Fehlermeldung zeigt, probieren Sie das Beispiel mit einem der beiden anderen Compiler aus.

## Raku im Browser

mutsu lässt sich auch nach WebAssembly übersetzen und läuft so innerhalb einer Webseite. Seine Website, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), nutzt das für eine Einführung in Raku auf Englisch und Japanisch, ein Tutorial zum Mitmachen und einen Spielplatz, auf dem Sie Raku ausführen können, ohne etwas zu installieren — auf all diesen Seiten läuft mutsu selbst.

## Module

mutsu bringt eine eigene Kopie des Paketmanagers zef mit, die `mzef` heißt, sodass sich Raku-Module dafür auf die übliche Weise installieren lassen: mit `mzef install`, gefolgt vom Namen des Moduls.

## Quellcode

mutsu ist quelloffen. Sie finden ihn samt Release-Builds und Bauanleitung unter [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
