---
title: 'Lösung: In gerade und ungerade aufteilen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Du findest den Quellcode in der Datei [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Ausgabe

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Kommentare

1. `* %% 2` ist für durch zwei teilbare Zahlen wahr; `* % 2` ist wahr, wenn der Rest von
null verschieden ist, die Zahl also ungerade ist. Jedes `grep` behält eine Gruppe.

1. Das Interpolieren von `@even[]` mit dem Zen-Slice aus leeren Klammern gibt die Elemente
durch Leerzeichen getrennt innerhalb der Zeichenkette in doppelten Anführungszeichen aus.

{% include nav.html %}
