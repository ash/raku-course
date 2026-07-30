---
title: 'Lösung: Zwei Funktionen verketten'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Du findest den Quellcode in der Datei [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Ausgabe

```
12
```

## Kommentare

1. Die Parameter `&f` und `&g` nehmen beliebige aufrufbare Dinge an — hier die
Whatever-Funktionen `* * 2` und `* + 1`.

1. `compose` liefert eine frische anonyme Funktion `-> $x { f(g($x)) }`. Sie auf `5`
aufzurufen führt zuerst `g` aus (`5 + 1`), dann `f` (`6 * 2`), was `12` ergibt.

{% include nav.html %}
