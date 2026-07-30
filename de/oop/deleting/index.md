---
title: Dateien und Verzeichnisse löschen
translations_gpt:
---

{% include menu.html %}

So wie `spurt` und `mkdir` Dinge auf der Platte anlegen, entfernen zwei Routinen sie wieder.

Die Routine `unlink` löscht eine Datei:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` löscht die genannte Datei. Wie die übrigen Dateisystemroutinen hat sie auch eine Methodenform auf einem Pfadobjekt — `'temp.txt'.IO.unlink`.

Das Löschen geschieht sofort und dauerhaft: Es gibt keinen Papierkorb, aus dem sich etwas zurückholen ließe. Beachten Sie, dass Sie nach dem Verschwinden einer Datei mit `.e` (Existenz) statt mit `.f` auf sie prüfen müssen, denn die Typprüfungen `.f` und `.d` werfen, wenn der Pfad nicht vorhanden ist.

Die Routine `rmdir` entfernt ein Verzeichnis, aber nur ein **leeres**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Enthält das Verzeichnis noch etwas, entfernt `rmdir` nichts und lässt es stehen. Um ein Verzeichnis mit Dateien zu löschen, leeren Sie es also zuerst und entfernen es dann:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` listet die Einträge des Verzeichnisses auf (das vorige Thema hat das behandelt), und `.unlink` auf jedem davon entfernt sie. Sobald das Verzeichnis leer ist, kann `rmdir` es wegnehmen. (Diese flache Schleife setzt voraus, dass das Verzeichnis nur Dateien enthält; ein Baum mit verschachtelten Unterverzeichnissen müsste zuerst in diese absteigen.)

{% include nav.html %}
