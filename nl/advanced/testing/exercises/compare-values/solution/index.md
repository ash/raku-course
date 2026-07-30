---
title: 'Solution: Waarden vergelijken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Je kunt de broncode vinden in het bestand [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Uitvoer

```
ok 1 - uppercase
1..1
```

## Opmerkingen

1. `is` vergelijkt de werkelijke waarde `'a'.uc` met de verwachte waarde `'A'`.

1. Ze komen overeen, dus de test slaagt; bij een fout zou `is` beide waarden tonen.

{% include nav.html %}
