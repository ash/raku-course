---
title: 'Lösung: Vorzeichen und Parität'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Du findest den Quellcode in der Datei [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Ausgabe

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Kommentare

1. Das Vorzeichen wird mit einem *verketteten* ternären Operator gewählt: `negative`
unterhalb von null, sonst `zero` bei Gleichheit, sonst `positive`.

1. `$n %% 2` prüft die Teilbarkeit durch zwei, ist also für gerade Zahlen wahr und für
ungerade falsch. (`0` zählt als gerade.)

{% include nav.html %}
