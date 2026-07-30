---
title: De Raku++-compiler
translations_gpt:
---

{% include menu.html %}

**Raku++** — het uitvoerbare bestand heet `rakupp` — is een tweede Raku-compiler, voor het eerst uitgebracht in juli 2026. Waar Rakudo op de virtuele machine MoarVM draait, is Raku++ in **C++** geschreven en heeft het geen eigen virtuele machine nodig.

Het is zowel een **interpreter** als een **compiler**: het kan een programma direct uitvoeren of het vertalen naar machinecode voor extra snelheid. Omdat er geen zware runtime opgestart hoeft te worden, start `rakupp` in slechts een paar milliseconden, wat prettig is voor korte scripts en dagelijks werk op de opdrachtregel. De auteur beschrijft het als de snelste Raku-compiler.

Raku++ implementeert Raku 6.d (met enkele mogelijkheden uit 6.e). In versie 0.5.1 doorstaat het al ongeveer 82% van de testsuite Roast — de officiële verzameling Raku-tests. Het is jong, dus het dekt de taal nog niet helemaal, maar het ontwikkelt zich snel.

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
