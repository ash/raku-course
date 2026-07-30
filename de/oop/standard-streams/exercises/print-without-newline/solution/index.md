---
title: 'Lösung: Ausgeben ohne Zeilenumbruch'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Du findest den Quellcode in der Datei [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Ausgabe

```
abc
```

## Kommentare

1. `$*OUT.print` schreibt seinen Text, ohne einen Zeilenumbruch anzufügen, `a` und `b` bleiben also in derselben Zeile.

1. `$*OUT.say` schreibt `c` und danach einen Zeilenumbruch und schließt damit die Zeile `abc` ab.

{% include nav.html %}
