---
title: 'Solutio: Convertorem utere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

Programma, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature) invenies.

## Exitus

```console
$ raku -I. temperature.raku 100
212
```

## Commentarii

1. `use Temperature` modulum onerat et eius subprogramma exportatum `c-to-f` importat, itaque programma illud directe vocare potest.

1. `sub MAIN($celsius)` argumentum lineae imperandi accipit, itaque temperatura convertenda tunc eligitur cum programma curritur, non in codice fixa. Sine argumento cursum, Raku nuntium usus sponte imprimit.

1. Modulus attingi debet, quapropter programma cum `-I.` curritur ut Raku `Temperature.rakumod` in directoria currenti quaerat. Conversio `100` °C dat `212` °F.

{% include nav.html %}
