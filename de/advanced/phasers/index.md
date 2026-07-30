---
title: Phasers
---

{% include menu.html %}

Ein _Phaser_ ist ein spezieller Block, der automatisch zu einem bestimmten Zeitpunkt im Lebenszyklus eines Programms ausgeführt wird, anstatt dort, wo er im Quellcode steht. Du rufst einen Phaser nicht auf; du sagst nur, _wann_ sein Code ausgeführt werden soll, indem du den Block benennst.

Die gebräuchlichsten Phaser markieren Phasen des Programms als Ganzes:

* `BEGIN` wird so früh wie möglich ausgeführt, während das Programm noch kompiliert wird;
* `INIT` wird einmal zu Beginn der Ausführung ausgeführt, vor dem Hauptcode;
* `END` wird einmal ganz am Ende ausgeführt, nachdem der Hauptcode abgeschlossen ist.

Das folgende Programm platziert diese Phaser zwischen gewöhnlichen Anweisungen. Beachte, dass die Ausgabe nicht der Reihenfolge der Zeilen in der Datei folgt:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

Das Programm gibt aus:

```
BEGIN
INIT
main body
END
```

`BEGIN` wird zuerst ausgeführt, während der Kompilierung. Dann wird zur Laufzeit `INIT` vor dem Hauptteil ausgeführt. Der Hauptteil wird als Nächstes ausgegeben, und `END` wird zuletzt ausgeführt, egal wo es geschrieben wurde.

Eine häufige Verwendung von `END` ist es, eine Zusammenfassung auszugeben oder etwas aufzuräumen, kurz bevor das Programm beendet wird, während `BEGIN` praktisch für Arbeit ist, die vor allem anderen passieren muss.

{% include nav.html %}
