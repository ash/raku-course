---
title: 'Solution: Der Wert eines do-Blocks'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Du findest den Quellcode in der Datei [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Ausgabe

```
big
```

## Kommentare

1. Ein einfaches `if` ist eine Anweisung und hat keinen verwendbaren Wert. Das `do`-Präfix verwandelt das gesamte `if`/`else` in einen Ausdruck.

1. Da `7 > 5` wahr ist, ergibt der Ausdruck `'big'`, was `$label` zugewiesen wird. Der gleiche Trick funktioniert mit `do given` und `do for`.

1. Die `{ }`-Klammern sind nicht optional. Rakus `if` erwartet immer einen Block, daher kannst du die Zweige nicht zu `if 7 > 5 'big' else 'small'` verkürzen — das lässt sich nicht kompilieren und gibt den Fehler *Missing block* aus.

{% include nav.html %}
