---
title: 'Lösung: Nach Typ beschreiben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Du findest den Quellcode in der Datei [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Ausgabe

```
integer 42
string hi
list of 3
```

## Kommentare

1. Jedes `multi` gibt eine Fassung von `describe` mit einem anderen Parametertyp. Raku
wählt den passenden Kandidaten nach dem Typ des Arguments.

1. Die Signatur `@x` trifft eine Liste, das Array wird also an den dritten Kandidaten
verteilt, der seine Länge meldet.

{% include nav.html %}
