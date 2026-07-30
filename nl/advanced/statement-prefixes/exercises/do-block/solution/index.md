---
title: 'Solution: De waarde van een do-blok'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Je kunt de broncode vinden in het bestand [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Uitvoer

```
big
```

## Opmerkingen

1. Een kaal `if` is een statement en heeft geen bruikbare waarde. Het prefix `do` maakt van het hele `if`/`else`-construct een expressie.

1. Aangezien `7 > 5` waar is, levert de expressie `'big'` op, dat wordt toegewezen aan `$label`. Dezelfde truc werkt met `do given` en `do for`.

1. De `{ }` accolades zijn niet optioneel. Raku's `if` neemt altijd een blok, dus je kunt de takken niet inkorten tot `if 7 > 5 'big' else 'small'` — dat compileert niet en geeft *Missing block*.

{% include nav.html %}
