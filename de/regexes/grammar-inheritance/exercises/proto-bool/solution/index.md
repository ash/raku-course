---
title: 'Lösung: Ein Wahrheitswert mit proto'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Du findest den Quellcode in der Datei [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Ausgabe

```
True
True
False
```

## Kommentare

1. Das Prototoken `bool` hat zwei benannte Spielarten, `true` und `false`.

1. Jede Zerlegung wählt die passende Spielart, sowohl `'true'` als auch `'false'` gelingt also. Ein Prototoken ist die ordentliche Art einer Grammatik zu sagen: „eine dieser benannten Alternativen“.

1. `'unknown'` trifft keine der beiden Spielarten, das Prototoken hat also nichts, wohin es weiterreichen könnte, und das Zerlegen scheitert — `False`. Die Proto nimmt genau die Alternativen an, die Sie aufführen, und sonst nichts.

{% include nav.html %}
