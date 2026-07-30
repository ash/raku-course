---
title: 'Solution: Die Datenstruktur dumpen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Du findest den Quellcode in der Datei [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Ausgabe

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Kommentare

1. `dd @data` gibt eine codeähnliche Darstellung des Array-Inhalts aus. Die Ausgabe erfolgt auf den Standardfehlerstream.

1. Die Methode `.raku` gibt dieselbe Darstellung als String zurück, der dann mittels Code-Interpolation in eine normale Nachricht eingebettet und mit `say` auf die Standardausgabe geschrieben wird.

1. Die beiden Zeilen sehen hier gleich aus, aber sie durchlaufen verschiedene Ausgabeströme: Die erste kommt von `dd` (Standardfehlerausgabe), die zweite von `say` (Standardausgabe). Vergleiche:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
