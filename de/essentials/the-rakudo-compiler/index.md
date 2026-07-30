---
title: Der Rakudo-Compiler
translations_gpt:
---

{% include menu.html %}

**Rakudo** ist die Referenzimplementierung von Raku und der Compiler, den dieser Kurs verwendet. Er ist heute die vollständigste und am gründlichsten erprobte Art, Raku auszuführen; wenn also von „dem Raku-Compiler“ die Rede ist, ist meist Rakudo gemeint.

Rakudo selbst ist größtenteils in Raku geschrieben, zusammen mit einer kleineren Bootstrap-Sprache namens NQP („Not Quite Perl“). Er übersetzt Ihr Programm in Bytecode und führt es auf einer virtuellen Maschine namens **MoarVM** aus, die Sie bei der Installation von Rakudo automatisch mitbekommen. Da Rakudo die gesamte Sprache abdecken will, ist er die sicherste Wahl, wenn Sie jeden Winkel von Raku brauchen.

Rakudo implementiert Raku 6.d und erscheint in kurzen Abständen, sodass Korrekturen und neue Möglichkeiten Sie schnell erreichen.

## Die virtuelle Maschine

Standardmäßig läuft Rakudo auf MoarVM, einer eigens für Raku gebauten virtuellen Maschine. Der Entwurf bindet Rakudo nicht an eine einzige Maschine — er lässt sich auch auf anderen virtuellen Maschinen aufsetzen —, doch MoarVM ist das übliche, gut unterstützte Ziel, und dieser Kurs setzt es voraus. Das ist der wesentliche Unterschied zu [Raku++](/de/essentials/the-rakupp-compiler), das in C++ geschrieben ist und keine eigene virtuelle Maschine braucht.

## Quellcode und Links

Rakudo ist quelloffen und wird öffentlich entwickelt:

* [rakudo.org](https://rakudo.org)
* [Rakudo auf GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
