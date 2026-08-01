---
title: Raku, Rakudo und Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** ist der Name der Programmiersprache, während ein **Compiler** das Programm ist, das Ihren Code liest und ausführt. Raku ist nicht an einen einzigen Compiler gebunden: Dieser Kurs verwendet **Rakudo**, den etablierten und vollständigsten, und daneben gibt es einen neueren Compiler namens **Raku++**.

## Mehr als ein Compiler

Der Entwurf von Raku schreibt nicht vor, welchen Compiler man verwenden soll. Zu den Entwurfsdokumenten gehört eine Sammlung von Testfällen namens Roast; jeder kann einen Compiler schreiben, und wenn er diese Tests besteht, ist er ein Raku-Compiler.

Lange Zeit war Rakudo die einzige ausgereifte Implementierung, doch das ist nicht mehr so. Im Juli 2026 erschien ein zweiter Compiler — **Raku++** (sein ausführbares Programm heißt `rakupp`), geschrieben in C++. Er ist jung und deckt die Sprache noch nicht vollständig ab, besteht aber bereits einen großen Teil der Roast-Sammlung und startet bemerkenswert schnell. Dieser Kurs verwendet Rakudo für seine Beispiele, doch was Sie lernen, ist die Sprache Raku selbst, und vieles davon läuft unverändert auch auf Raku++. Die folgenden Seiten betrachten die beiden Compiler — Rakudo und Raku++ — nacheinander und zeigen, wie man sie installiert.

## Externe Links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ auf GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
