---
title: Übung ’Geben Sie eine Variable an ein Kind weiter‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Legen Sie eine Datei `notes.txt` an und schreiben Sie ein paar Zeilen hinein. Setzen Sie ihren Namen in eine Umgebungsvariable `NOTES`. Führen Sie dann mit `shell` den Befehl `wc -l` aus und lesen Sie den Dateinamen aus `$NOTES`, sodass das Kind die Zeilen zählt und die Anzahl ausgibt. Löschen Sie die Datei schließlich aus Raku heraus — mit `unlink`, nicht über die Shell.

## Beispiel

Das Programm gibt aus:

```
3
```

(und lässt keine `notes.txt` zurück.)

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
