---
title: 'Solution: Eine Warnung unterdrücken'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Du findest den Quellcode in der Datei [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Ausgabe

```
Hello, !
```

## Kommentare

1. Die Interpolation des undefinierten `$name` in den String löst normalerweise eine Warnung wegen der Verwendung eines uninitialisierten Werts aus. Das Einwickeln des Ausdrucks in `quietly` unterdrückt diese, sodass nur die Begrüßung ausgegeben wird.

1. Wie `do` gibt `quietly` den Wert seines Blocks zurück, sodass der zusammengesetzte String (wobei der fehlende Name eine leere Lücke hinterlässt) in `$greeting` gespeichert wird.

1. `quietly` verbirgt nur die Warnung — der Wert ist weiterhin undefiniert. Wenn du stattdessen mit dem fehlenden Wert *umgehen* möchtest, verwende einen Standardwert mit dem Defined-or-Operator `//`: `$name // 'friend'` ergibt `'friend'`, wenn `$name` undefiniert ist, sodass `"Hello, " ~ ($name // 'friend') ~ "!"` `Hello, friend!` ohne jegliche Warnung ausgibt.

{% include nav.html %}
