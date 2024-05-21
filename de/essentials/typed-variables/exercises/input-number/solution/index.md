---
title: Lösung von 'Benutzereingabe in eine Zahl umwandeln'
---

{% include menu.html %}

Das Programm kann so einfach sein:

## Code

```raku
my Int $n = prompt 'Geben Sie eine Zahl ein: ';
say $n;
```

🦋 Den Quellcode finden Sie in der Datei [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Beispiel

Führen Sie es aus und geben Sie eine ganze Zahl ein, entweder positiv oder negativ:

```console
$ raku exercises/typed-variables/input-number.raku
Geben Sie eine Zahl ein: -42
-42
```

## Kommentare

Wie wir [gesehen haben](/de/essentials/typed-variables/allomorphs), ist der Rückgabewert von `prompt` `IntStr`, der ohne Umwandlung einer `Int`-Variablen zugewiesen werden kann.

Beachten Sie jedoch, dass das Programm mit einer Ausnahme beendet wird, wenn Sie eine Zeichenkette eingeben, die nicht in eine ganze Zahl umgewandelt werden kann.

{% include nav.html %}