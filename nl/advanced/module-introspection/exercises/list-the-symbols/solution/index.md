---
title: 'Solution: De symbolen oplijsten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

Het programma, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Uitvoer

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Opmerkingen

1. `Circle::` is het pakket van de module, en `.keys` geeft de namen weer die het bevat, elk inclusief zijn sigil.

1. `.elems` telt die namen — de module definieert twee `our`-variabelen, dus de telling is `2`.

1. `.keys` garandeert geen bepaalde volgorde, dus passen we `.sort` toe om een stabiel, alfabetisch resultaat `($pi $tau)` te krijgen. Zonder sortering kunnen de twee namen bij verschillende uitvoeringen in willekeurige volgorde verschijnen.

{% include nav.html %}
