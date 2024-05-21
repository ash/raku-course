---
title: Ausführen von der Kommandozeile
---

{% include menu.html %}

Speichern Sie den Text des Programms in einer Textdatei, zum Beispiel `hello.raku`, und übergeben Sie den Pfad zur Datei an das Kommandozeilen-Tool `raku` (das Dollarzeichen zeigt die Eingabeaufforderung der Shell an):

```console
$ raku hello.raku
```

Wenn das Programm keine Fehler enthält, wird es sofort ausgeführt, und wenn es eine Ausgabe erzeugt, sehen Sie das Ergebnis im Terminal:

```console
$ raku hello.raku 
Hallo, Welt!
```

Wenn Sie mit Unix-basierten Systemen arbeiten, können Sie eine Shebang-Zeile hinzufügen und die Datei ausführbar machen:

```raku
#!/usr/bin/env raku

say 'Hallo, Welt!';
```

Die nächsten Schritte sind die folgenden:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hallo, Welt!
```

{% include nav.html %}