---
title: 'Lösung: Löschen Sie eine Datei'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Du findest den Quellcode in der Datei [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Ausgabe

```
True
False
```

## Kommentare

1. `spurt` legt die Datei an, die erste `.e`-Prüfung meldet also `True`.

1. `unlink` löscht sie. Die zweite `.e`-Prüfung meldet daraufhin `False`, weil die Datei verschwunden ist. Beachten Sie die Verwendung von `.e` statt `.f`: Die Typprüfung `.f` würde auf einem nicht mehr vorhandenen Pfad werfen, während `.e` schlicht `False` antwortet.

{% include nav.html %}
