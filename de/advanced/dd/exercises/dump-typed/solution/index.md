---
title: 'Solution: Eine typisierte Variable dumpen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my Int $n = 42;
dd $n;
```

🦋 Du findest den Quellcode in der Datei [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Ausgabe

```
Int $n = 42
```

## Kommentare

1. Da die Variable einen deklarierten Typ hat, gibt `dd` diesen Typ vor dem Namen aus: `Int $n = 42`.

1. Eine untypisierte Variable würde einfach als `$n = 42` ausgegeben, ohne den Typ.

{% include nav.html %}
