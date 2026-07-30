---
title: 'Lösung: Bauen Sie ein Protokoll auf'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Du findest den Quellcode in der Datei [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Ausgabe

```
start
entry 1
entry 2
entry 3
```

## Kommentare

1. Das erste `spurt` legt die Datei frisch mit der Zeile `start` an.

1. Jedes `spurt` in der Schleife verwendet `:append`, setzt seine Zeile also hinter den bestehenden Inhalt, statt die Datei zu ersetzen. Genau so wächst eine Protokolldatei: Jeder Durchgang (oder jeder Programmlauf) hängt eine weitere Zeile ans Ende.

1. Ohne `:append` würde jeder Durchgang die Datei überschreiben, und nur die letzte Zeile bliebe übrig.

{% include nav.html %}
