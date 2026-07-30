---
title: 'Solution: Wat is het'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Je kunt de broncode vinden in het bestand [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Uitvoer

```
True
False
```

## Opmerkingen

1. `$a.WHAT` is niet de string `Int` maar het daadwerkelijke `Int` type object, dus `=== Int` vergelijkt het met het type zelf en geeft `True` terug.

1. `$b` bevat een string, dus zijn `WHAT` is `Str`; het vergelijken daarvan met `Int` geeft `False`. Dit is wat `WHAT` nuttig maakt in condities, niet alleen in afdrukken.

{% include nav.html %}
