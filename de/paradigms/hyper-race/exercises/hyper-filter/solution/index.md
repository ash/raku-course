---
title: 'Lösung: Hyper mit einem Filter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Du findest den Quellcode in der Datei [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Ausgabe

```
(121 144 169 196 225 256 289 324 361 400)
```

## Kommentare

1. `*²` ist nur Rakus Hochstellungsschreibweise für `* ** 2`: Das `²` ist ein nachgestellter Potenzoperator, `*²` ist also ein `WhateverCode`, das sein Argument quadriert. Schreiben Sie `* ** 2`, wenn Ihnen das lieber ist.

1. `.hyper` parallelisiert die ganze Kette — das `grep`, das die Zahlen über `10` behält, und das `map`, das sie quadriert — unter Bewahrung der Reihenfolge.

1. Weil die Reihenfolge bewahrt bleibt, kommen die Quadrate in derselben Folge wie ihre Eingaben zurück (`11²`, `12²`, …, `20²`), was `(121 144 169 196 225 256 289 324 361 400)` ergibt.

{% include nav.html %}
