---
title: 'Lösung: Primfaktorzerlegung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Du findest den Quellcode in der Datei [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Ausgabe

```
[2 2 2 3 3 5]
```

## Kommentare

1. Für jeden Teilerkandidaten `$d` teilt das innere `while` ihn so oft aus `$n` heraus,
wie er hineinpasst, und pusht dabei jedes Mal `$d`. Weil die kleineren Faktoren zuerst
entfernt werden, ist jedes `$d`, das `$n` noch teilt, mit Sicherheit prim.

1. `$n div= $d` ist eine Ganzzahldivision zurück in `$n`; sie schrumpft die Zahl, bis
nichts als `1` übrig bleibt.

{% include nav.html %}
