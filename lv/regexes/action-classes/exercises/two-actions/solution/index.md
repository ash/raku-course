---
title: 'Risinājums: Viena gramatika, divas darbību klases'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Atrodiet programmu failā [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Izvade

```
30
-10
```

## Komentāri

1. Gramatika apraksta tikai formu `skaitlis,skaitlis`; par to, kas jāaprēķina, tā neko nezina.

1. Abas darbību klases vienam un tam pašam parsējumam piesaista dažādas nozīmes — viena skaitļus saskaita, otra atņem. Lai iegūtu citu rezultātu, pietiek `.parse` padot citu `actions` objektu, gramatiku nemaz nemainot.

{% include nav.html %}
