---
title: 'Solution: Ein Roh-String'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say Q{$x and \n};
```

🦋 Du findest den Quellcode in der Datei [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Ausgabe

```
$x and \n
```

## Kommentare

1. `Q` ist die wörtlichste Quoting-Form: Sie interpoliert nichts und verarbeitet keine Escape-Sequenzen.

1. Daher bleibt `$x` als Text erhalten und `\n` bleibt als Backslash und ein `n`.

{% include nav.html %}
