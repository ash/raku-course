---
title: Raku, Rakudo und Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** ist der Name der Programmiersprache, während ein **Compiler** das Programm ist, das Ihren Code liest und ausführt. Raku ist nicht an einen einzigen Compiler gebunden: Dieser Kurs verwendet **Rakudo**, den etablierten, und daneben gibt es auch neuere — **Raku++** und **mutsu**.

## Mehr als ein Compiler

Der Entwurf von Raku schreibt nicht vor, welchen Compiler man verwenden soll. Zu den Entwurfsdokumenten gehört eine Sammlung von Testfällen namens Roast; jeder kann einen Compiler schreiben, und wenn er diese Tests besteht, ist er ein Raku-Compiler.

Lange Zeit war Rakudo die einzige ausgereifte Implementierung, doch das ist nicht mehr so. Im Juli 2026 erschien ein zweiter Compiler — **Raku++** (sein ausführbares Programm heißt `rakupp`), geschrieben in C++. Seine Version 5.4.1 besteht die gesamte Roast-Sammlung, und er startet bemerkenswert schnell. Dieser Kurs verwendet Rakudo für seine Beispiele, doch was Sie lernen, ist die Sprache Raku selbst, und fast alles davon läuft unverändert auch auf Raku++. Die folgenden Seiten betrachten diese beiden Compiler — Rakudo und Raku++ — nacheinander und zeigen, wie man sie installiert.

Es gibt außerdem eine dritte Implementierung: **mutsu**, einen in Rust geschriebenen Interpreter von Tokuhiro Matsuno. Er übersetzt Raku in Bytecode für eine eigene virtuelle Maschine und läuft dank WebAssembly auch im Webbrowser — seine Website bietet ein Raku-Tutorial und einen Spielplatz, die darauf aufbauen. mutsu wird aktiv entwickelt und ist nach den Worten seines Autors noch nicht für den Produktiveinsatz geeignet, besteht aber bereits fast alle Roast-Testdateien.

## Externe Links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ auf GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
