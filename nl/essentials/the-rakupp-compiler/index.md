---
title: De Raku++-compiler
translations_gpt:
---

{% include menu.html %}

**Raku++** — het uitvoerbare bestand heet `rakupp` — is een tweede Raku-compiler, voor het eerst uitgebracht in juli 2026. Waar Rakudo op de virtuele machine MoarVM draait, is Raku++ in **C++** geschreven en heeft het geen eigen virtuele machine nodig.

Het is zowel een **interpreter** als een **compiler**: het kan een programma direct uitvoeren of het vertalen naar machinecode voor extra snelheid. Omdat er geen zware runtime opgestart hoeft te worden, start `rakupp` in slechts een paar milliseconden, wat prettig is voor korte scripts en dagelijks werk op de opdrachtregel. De auteur beschrijft het als de snelste Raku-compiler.

Raku++ implementeert standaard Raku 6.d, en 6.e wanneer een programma daarom vraagt met `use v6.e.PREVIEW`. Versie 5.4.1, uitgebracht in oktober 2026, doorstaat alle 1.425 testbestanden van de testsuite Roast — de officiële verzameling Raku-tests.

Raku++ draait ook in een webbrowser: gecompileerd naar WebAssembly vormt het de motor van de speeltuin op [raku.online](https://raku.online), waar je Raku kunt uitproberen zonder iets te installeren.

## Interpreter- en compilermodus

Voer een programma meteen uit, net zoals je met Rakudo zou doen:

```console
$ rakupp hello.raku
```

Of vraag Raku++ om een programma om te zetten in een zelfstandig uitvoerbaar bestand, dat nog sneller draait:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Voor dagelijks leren is de gewone interpretermodus alles wat je nodig hebt; de compilerende modi staan klaar wanneer je die extra snelheid wilt.

## Broncode

Raku++ is open source. Je vindt het, samen met de binaire bestanden van de uitgaven en bouwinstructies, op [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
