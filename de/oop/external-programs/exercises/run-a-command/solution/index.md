---
title: 'Lösung: Führen Sie einen Befehl aus'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Du findest den Quellcode in der Datei [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Ausgabe

```
home: $HOME
```

## Kommentare

1. `run` startet `echo` unmittelbar und übergibt jede Zeichenkette als getrenntes Argument. Ohne `:out` geht die Ausgabe des Programms direkt an den Bildschirm.

1. Das Argument erreicht `echo` genau so, wie es geschrieben steht: `$HOME` wird wörtlich ausgegeben und nicht durch Ihr Heimatverzeichnis ersetzt, weil keine Shell beteiligt ist, die es ersetzen würde. Deshalb ist `run` die sichere Standardwahl — derselbe Befehl an `shell` übergeben könnte sich ganz anders verhalten.

1. Um das Heimatverzeichnis tatsächlich auszugeben, lassen Sie eine Shell die Ersetzung vornehmen: `shell 'echo home: $HOME'` gibt etwas wie `home: /home/anna` aus. (Behalten Sie die einfachen Anführungszeichen auch auf der Raku-Seite bei — ein `"$HOME"` in doppelten Anführungszeichen würde Raku selbst dazu bringen, eine Variable namens `$HOME` zu interpolieren, noch bevor `echo` überhaupt läuft.)

{% include nav.html %}
