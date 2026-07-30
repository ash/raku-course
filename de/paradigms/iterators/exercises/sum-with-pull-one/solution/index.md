---
title: 'Lösung: Summieren mit pull-one'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Du findest den Quellcode in der Datei [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Ausgabe

```
15
```

## Kommentare

1. `.iterator` liefert die abholende Sicht auf die Liste, und jedes `pull-one` liefert die nächste Zahl.

1. Der Wert wird mit `:=` **gebunden** und nicht zugewiesen, damit `$v =:= IterationEnd` das Ende richtig erkennen kann — eine Zuweisung mit `=` würde den Container statt des Wertes vergleichen. Die Schleife addiert `3`, `7` und `5`, trifft dann `IterationEnd` und hält an, sodass `15` übrig bleibt.

{% include nav.html %}
