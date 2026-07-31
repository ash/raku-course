---
title: Der Raku++-Compiler
translations_gpt:
---

{% include menu.html %}

**Raku++** — seine ausführbare Datei heißt `rakupp` — ist ein zweiter Raku-Compiler, erstmals veröffentlicht im Juli 2026. Während Rakudo auf der virtuellen Maschine MoarVM läuft, ist Raku++ in **C++** geschrieben und braucht keine eigene virtuelle Maschine.

Er ist zugleich **Interpreter** und **Compiler**: Er kann ein Programm direkt ausführen oder es für zusätzliche Geschwindigkeit in nativen Code übersetzen. Da keine schwergewichtige Laufzeitumgebung hochgefahren werden muss, startet `rakupp` in wenigen Millisekunden, was ihn für kurze Skripte und die alltägliche Arbeit auf der Befehlszeile angenehm macht. Sein Autor beschreibt ihn als den schnellsten Raku-Compiler.

Raku++ implementiert Raku 6.d (mit einigen Möglichkeiten aus 6.e). In Version 1.5.2 besteht er bereits etwa 90 % der Roast-Testsuite — der offiziellen Sammlung von Raku-Tests. Er ist jung und deckt daher noch nicht die gesamte Sprache ab, entwickelt sich aber rasch.

## Interpreter- und Compiler-Modus

Führen Sie ein Programm direkt aus, genau wie mit Rakudo:

```console
$ rakupp hello.raku
```

Oder lassen Sie Raku++ aus einem Programm eine eigenständige native ausführbare Datei machen, die noch schneller läuft:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Zum alltäglichen Lernen genügt der einfache Interpreter-Modus völlig; die übersetzenden Modi sind da, wenn Sie zusätzliche Geschwindigkeit wollen.

## Quellcode

Raku++ ist quelloffen. Sie finden ihn samt Release-Binärdateien und Bauanleitung unter [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
