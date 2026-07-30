---
title: Dateihandles
translations_gpt:
---

{% include menu.html %}

Eine ganze Datei auf einmal zu lesen oder zu schreiben ist bequem, aber manchmal möchten Sie eine Datei Zeile für Zeile durchgehen oder eine Datei offen halten, während Sie wiederholt hineinschreiben. Dafür verwenden Sie einen _Dateihandle_.

Der einfachste Weg, eine Datei zeilenweise zu lesen, braucht nicht einmal einen ausdrücklichen Handle: Die Methode `lines` auf einem Pfadobjekt liefert die Zeilen einzeln, bereit für eine `for`-Schleife:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Jede `$line` ist eine einzelne Zeile, ohne ihren abschließenden Zeilenumbruch. Das Programm gibt aus:

```
ONE
TWO
THREE
```

Um über einen Handle in eine Datei zu schreiben, öffnen Sie sie mit `open` und dem Schalter `:w` (write), verwenden die Methoden `say` oder `print` des Handles und schließen ihn mit `close`, wenn Sie fertig sind:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Den Handle zu schließen stellt sicher, dass alles Geschriebene auf die Platte gelangt. Zeilenweise zu lesen, wie oben, ist der übliche Weg für Dateien, die zu groß sind, um sie am Stück in den Speicher zu holen.

{% include nav.html %}
