---
title: 'Lösung: Aufwärts zählen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Du findest den Quellcode in der Datei [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Ausgabe

```
1
2
3
```

## Kommentare

1. Der Grundfall `return if $n < 1` hält die Rekursion weiterhin an, sobald die Zählung unter null geht.

1. Die Reihenfolge der letzten beiden Zeilen ist es, die *aufwärts* zählen lässt: Jeder Aufruf steigt zuerst bis zum Grundfall hinab und gibt erst dann seine eigene Zahl aus, während sich die Aufrufe abwickeln. `1` wird also zuerst ausgegeben und `$n` zuletzt.

{% include nav.html %}
