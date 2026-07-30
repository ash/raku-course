---
title: 'Solution: Hex zu Dezimal'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Du findest den Quellcode in der Datei [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Ausgabe

```
26
1A
```

## Kommentare

1. Die Radix-Form `:16<1A>` liest `1A` als Zahl zur Basis 16, was `1 × 16 + 10 = 26` ergibt. Die Variable `$n` enthaelt nun die einfache ganze Zahl.

1. `$n.base(16)` wandelt diese ganze Zahl zurück in eine Zeichenkette zur Basis 16 und ergibt wieder `1A` -- was bestaetigt, dass das Lesen einer Basis und das Ausgeben in einer Basis inverse Operationen sind.

{% include nav.html %}
