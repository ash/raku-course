---
title: 'Lösung: Try oder Standardwert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Du findest den Quellcode in der Datei [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Ausgabe

```
default
```

## Kommentare

1. Der fehlschlagende `try`-Block ergibt einen undefinierten Wert.

1. Der Defined-or-Operator `//` liefert daher seine rechte Seite, `'default'`, was einen sauberen Weg ergibt, sich in einer Zeile mit einem Ersatzwert zu erholen.

{% include nav.html %}
