---
title: Importeren
translations_gpt: Importeren
---

{% include menu.html %}

Er is meer dan één manier om een module in een programma te laden. De drie statements `use`, `need` en `require` verschillen in _wanneer_ de module wordt geladen en in _wat_ deze beschikbaar maakt.

## `use`

Je hebt `use` al ontmoet. Het laadt de module tijdens het compileren en importeert de geëxporteerde namen, zodat ze direct aangeroepen kunnen worden:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` laadt de module ook tijdens het compileren, maar het importeert de geëxporteerde namen _niet_. Je bereikt de `our`-variabelen van de module nog steeds via de naam van de module:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Na `need Greeting` zou een kale `hello(...)` niet herkend worden, omdat er niets is geïmporteerd — alleen de gekwalificeerde namen, zoals `$Greeting::version`, zijn beschikbaar.

## `require`

`require` laadt de module tijdens de _uitvoering_ in plaats van tijdens het compileren. Dit is handig wanneer je pas tijdens het draaien van het programma weet of een module nodig is, bijvoorbeeld wanneer de naam wordt bepaald door gebruikersinvoer.

Omdat het laden plaatsvindt tijdens de uitvoering, wordt er niets automatisch geïmporteerd. Door de gewenste symbolen tussen punthaken na de naam op te sommen, worden ze binnengehaald, zodat ze direct aangeroepen kunnen worden:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Voor dagelijks gebruik is `use` wat je wilt; `need` en `require` zijn er voor de minder gangbare gevallen.

{% include nav.html %}
