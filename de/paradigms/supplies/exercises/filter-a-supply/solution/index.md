---
title: 'Lösung: Filtern Sie ein Supply'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Du findest den Quellcode in der Datei [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Ausgabe

```
[2 4 6]
```

## Kommentare

1. `grep(* %% 2)` erzeugt ein neues Supply, das nur die geraden Werte weitergibt, genau wie `grep` eine Liste filtert.

1. Die Zapfstelle sammelt diese Werte in `@out`, was `[2 4 6]` ergibt.

{% include nav.html %}
