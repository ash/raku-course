---
title: Tests ausführen
---

{% include menu.html %}

Eine einzelne Testdatei ist einfach ein Raku-Programm, du kannst sie also direkt ausführen:

```
raku t/01-basic.rakutest
```

Sie gibt ihre TAP-Ausgabe auf dem Bildschirm aus. Für mehr als ein oder zwei Dateien brauchst du einen _Test-Runner_, der ein ganzes Verzeichnis von Tests ausführt und die Ergebnisse zusammenfasst. Rakus Runner ist `prove6`:

```
prove6 t/
```

Dies führt jede Testdatei unter `t/` aus und meldet, wie viele Dateien und Tests bestanden wurden, mit einem einzigen Gesamtergebnis am Ende — viel leichter zu lesen als die rohe TAP-Ausgabe jeder einzelnen Datei.

Wenn eine Distribution eine `META6.json` hat, führt das Modultool die Tests für dich aus:

```
zef test .
```

`zef test` findet das `t/`-Verzeichnis, führt die Suite aus und meldet das Ergebnis — was genau das ist, was automatisch passiert, bevor eine Distribution installiert wird. Tests erfüllen also einen doppelten Zweck: Du führst sie während der Entwicklung mit `prove6` aus, und das Ökosystem führt sie aus, um eine Distribution zu verifizieren, bevor jemand sie installiert.

> Testdateien haben die Endung `.rakutest` (oder `.t`) und werden konventionell nummeriert, wie in `t/01-basic.rakutest`.

{% include nav.html %}
