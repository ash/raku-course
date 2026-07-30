---
title: 'Solution: Een symbool opzoeken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

Het programma, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Uitvoer

```console
$ raku -I. lookup.raku
3.14
```

## Opmerkingen

1. `Circle::` is de stash van de module, en door een naam als sleutel te gebruiken — `Circle::{'$pi'}` — haal je de waarde op die eronder is opgeslagen. De sleutel moet de sigil bevatten, net zoals de weergegeven namen dat doen.

1. Dit bereikt dezelfde waarde als de gekwalificeerde `$Circle::pi`, maar omdat de naam een gewone string is, kan deze tijdens de uitvoering worden berekend in plaats van in de broncode te worden uitgeschreven.

{% include nav.html %}
